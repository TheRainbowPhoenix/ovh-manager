import { derived, writable, get } from 'svelte/store';

import { useReket } from '@ovh-ux/ovh-reket';

export const MAX_NOTIFICATIONS = 10;

export const NOTIFICATION_STATUS_ENUM = {
	ACKNOWLEDGED: 'acknowledged',
	ACTIVE: 'delivered',
	COMPLETED: 'completed',
	UNKNOWN: 'unknown'
};

export const ACKNOWLEDGED_STATUS = [
	NOTIFICATION_STATUS_ENUM.ACKNOWLEDGED,
	NOTIFICATION_STATUS_ENUM.COMPLETED,
	NOTIFICATION_STATUS_ENUM.UNKNOWN
];

type URLDetails = {
	href: string;
};

const reketInstance = useReket();

export type APINotification = {
	date: string;
	id: string;
	status: string;
	subject: string;
	description: string;
	updating: boolean;
	urlDetails: URLDetails;
	level: string;
};

export interface Notification extends APINotification {
	date: string;
	id: string;
	status: string;
	updating: boolean;
	urlDetails: URLDetails;
	isAcknoledged(): boolean;
	isActive(): boolean;
	isCompleted(): boolean;
	getUrl(): string;
	setStatus(status: string): void;
	setUpdating(state: boolean): void;
}

/**
 * Provide some methods on the notifications objects returned by 2API /notification.
 * @param  {Object} notification A notification object returned by 2API.
 * @return {Object}
 */
export const transformNotification = (notification: APINotification): Notification => {
	/**
	 * Helper that checks if the notification status is considered as acknoleged.
	 * @return {Boolean}
	 */
	const isAcknoledged = (): boolean => {
		return ACKNOWLEDGED_STATUS.includes(notification.status);
	};

	/**
	 * Helper that checks if the notification status is active.
	 * @return {Boolean}
	 */
	const isActive = (): boolean => {
		return notification.status === NOTIFICATION_STATUS_ENUM.ACTIVE;
	};

	/**
	 * Helper that checks if the notification status is completed.
	 * @return {Boolean}
	 */
	const isCompleted = (): boolean => {
		return notification.status === NOTIFICATION_STATUS_ENUM.COMPLETED;
	};

	/**
	 * Get the url href of the notification
	 * @return {String}
	 */
	const getUrl = (): string => {
		return notification?.urlDetails?.href;
	};

	/**
	 * Set a new status to the notification
	 * @param  {String} newStatus The new status of the notification (see NOTIFICATION_STATUS_ENUM for available status)
	 */
	const setStatus = (newStatus: string): void => {
		Object.assign(notification, {
			status: newStatus
		});
	};

	/**
	 * Set the notification upgrading state. Used to avoid multiple update on the same time.
	 * @param  {Boolean} updatingState
	 */
	const setUpdating = (updatingState: boolean): void => {
		Object.assign(notification, {
			updating: updatingState
		});
	};

	return {
		...notification,
		getUrl,
		isAcknoledged,
		isActive,
		isCompleted,
		setStatus,
		setUpdating
	};
};

export let refreshNotifications = async () => {
	notificationsLoading.set(true);
	let n = await getNotifications();
	notifications.set(n);
	notificationsLoading.set(false);
	console.debug('Updated the notifications (badly) to : ', n);
};

// TODO: Sorry, this is how OVH do its refresh interval to notifications
export const notifications = writable<Notification[]>([], () => {
	let interval = setInterval(async () => {
		refreshNotifications();
		console.debug('notifications refresh cycle');
	}, /*60 * */ 60 * 1000);

	return () => {
		clearInterval(interval);
	};
});

export const notificationsLoading = writable<boolean>(false);

export const getNotifications = async (): Promise<Notification[]> => {
	try {
		const apiNotifications = await reketInstance.get('/notification', {
			requestType: 'aapi',
			params: {
				// target: environment.getRegion(),
				// lang: environment.getUserLocale(),
			}
		});

		const newNotifications: APINotification[] = [];
		apiNotifications.forEach((notif: APINotification) => {
			newNotifications.push({
				...notif,
				urlDetails: {
					href: notif.urlDetails ? notif.urlDetails.href : ''
				}
			});
		});

		return newNotifications.map(transformNotification).slice(0, MAX_NOTIFICATIONS);
	} catch (error) {
		return [];
	}
};

export const getNotificationById = (notificationId: string): Notification | undefined => {
	return get(notifications).find(({ id }) => id === notificationId);
};

export const updateNotications = (status: unknown): Promise<unknown> => {
	let updated = [...get(notifications)].map((n) => {
		n.setStatus(NOTIFICATION_STATUS_ENUM.ACKNOWLEDGED);
		return n;
	});
	notifications.set(updated);

	return reketInstance.post('/notification', status, { requestType: 'aapi' });
};

export const readAllNotifications = async () => {
	await updateNotications({
		[NOTIFICATION_STATUS_ENUM.ACKNOWLEDGED]: get(notifications)
			.filter(({ updating, isActive }) => !updating && isActive())
			.map(({ id }) => id)
	});
	// await refreshNotifications();
	// queryClient.invalidateQueries(['notifications']);
};

const updateNotificationReadStatus = (
	notification: Notification,
	status: string
): Promise<unknown> => {
	notification.setUpdating(true);

	return updateNotications({
		[status]: [notification.id]
	})
		.then(() => {
			notification.setStatus(status);
			// queryClient.invalidateQueries(['notifications']);
		})
		.finally(() => {
			notification.setUpdating(false);
		});
};

export const toggleNotificationReadStatus = (
	notificationId: string,
	linkClicked = false
): Promise<unknown> => {
	const notificationToUpdate = getNotificationById(notificationId);

	if (notificationToUpdate && notificationToUpdate.isActive() && !notificationToUpdate.updating) {
		// mark as read
		return updateNotificationReadStatus(
			notificationToUpdate,
			NOTIFICATION_STATUS_ENUM.ACKNOWLEDGED
		);
	}
	if (
		notificationToUpdate &&
		!notificationToUpdate.isActive() &&
		!notificationToUpdate.updating &&
		!linkClicked
	) {
		// mark as unread
		return updateNotificationReadStatus(notificationToUpdate, NOTIFICATION_STATUS_ENUM.ACTIVE);
	}

	return Promise.resolve();
};
