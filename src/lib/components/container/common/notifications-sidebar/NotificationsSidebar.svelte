<script lang="ts">
	import { headerCtx } from '$lib/context/header';
	import { notifications, notificationsLoading } from '$lib/core/notifications';
	import type { Notification } from '$lib/core/notifications';
	import { fromNow } from '$lib/helpers/dateHelper';
	import { userLocale } from '$lib/i18n';
	import { get } from 'svelte/store';
	import Notifications from './Notifications.svelte';
	import NotificationsEmpty from './NotificationsEmpty.svelte';
	import NotificationsGroup from './NotificationsGroup.svelte';
	import NotificationsLoading from './NotificationsLoading.svelte';

	interface NotificationGroup {
		date: string;
		fromNow: string;
	}

	const getGroupedNotifications = async () => {
		const locale = get(userLocale); // useApplication().environment.getUserLocale();

		let n = get(notifications);
		if (!n || n.length == 0) return {};

		const allDates = [...new Set(get(notifications).map(({ date }) => date))];

		const groups: NotificationGroup[] = await Promise.all(
			allDates.map(async (date) => {
				const dateFromNow = await fromNow(date, locale);
				return { date, fromNow: dateFromNow };
			})
		);

		// const dateGroups = groups.reduce(
		// 	(all: Record<string, NotificationGroup>, { date, fromNow: dateFromNow }) => {
		// 		return {
		// 			...all,
		// 			[date]: dateFromNow
		// 		};
		// 	},
		// 	{}
		// );

		return n.reduce(function (obj: { [date: string]: Notification[] }, notif) {
			var date = `${notif.date}`;

			if (!obj.hasOwnProperty(date)) {
				obj[date] = [];
			}

			if (notif) {
				obj[date].push(notif);
			}

			return obj;
		}, {});

		// return groupBy(notifications, ({ date }) => dateGroups[date]);
	};

	let groupedNotifications: {
		[date: string]: Notification[];
	} = {};

	$: getGroupedNotifications().then((g) => (groupedNotifications = g));
</script>

<div
	role="menu"
	class:notificationsSidebar_toggle={$headerCtx.isNotificationsSidebarVisible}
	class="notificationsSidebar"
>
	<Notifications>
		{#if $notificationsLoading}
			<NotificationsLoading />
		{:else if !$notifications.length}
			<NotificationsEmpty />
		{:else}
			{#each Object.keys(groupedNotifications) as groupTime}
				<NotificationsGroup notifications={groupedNotifications[groupTime]} title={groupTime} />
			{/each}
		{/if}
	</Notifications>
</div>

<style lang="scss">
	.notificationsSidebar {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens';

		position: fixed;
		top: 2.75rem;
		bottom: 0;
		right: 0;
		background-color: $p-075;
		width: 19.375rem;
		transform: translateX(19.375rem);
		z-index: $base-z-index-panel;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		box-shadow: 0 0.875rem 0.938rem 0 rgba(51, 62, 77, 0.25);
		transition: transform 0.1s ease-out;

		&_toggle {
			transform: translateX(0);
		}
	}

	.navbarLink:disabled {
		opacity: 0.5;
	}
</style>
