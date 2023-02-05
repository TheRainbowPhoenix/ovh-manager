import type { Environment, User } from '$lib/core/environment';
import { useReket } from '@ovh-ux/ovh-reket';

export const EXCLUDED_ROLES = ['account'];

export interface UserInfos {
	getUser(): User;
	getUserNameInitials(): string;
	getUserDisplayName(): string;
	getSupportLevel(): string;
	isTrustedUser(): boolean;
	getUserRole(): string;
}

export const userInfos = (user: User): UserInfos => {
	let u = user;
	/**
	 * Get the information of the connected user.
	 * @return {Object}
	 */
	const getUser = (): User => {
		return user;
	};

	/**
	 * Get the user initials.
	 * @return {String} The concatenation of the first char of the user firstname
	 *                  with the first char of the use name.
	 */
	const getUserNameInitials = (): string => {
		return `${(user?.firstname && user.firstname[0]) || ''}${
			(user?.name && user.name[0]) || ''
		}`.toUpperCase();
	};

	const getUserDisplayName = (): string => {
		return `${user.firstname} ${user.name}`;
	};

	/**
	 * Get the support level of the connected user.
	 * @return {String}
	 */
	const getSupportLevel = (): string /* SupportLevel */ => {
		return user?.supportLevel?.level || '';
	};

	/**
	 * Check if the user is flagged as trusted.
	 * @return {Boolean}
	 */
	const isTrustedUser = (): boolean => {
		return user?.isTrusted || false;
	};

	const getUserRole = (): string => {
		return !EXCLUDED_ROLES.includes(user?.auth?.method) ? user?.auth?.method : '';
	};

	return {
		getUser,
		getUserNameInitials,
		getUserDisplayName,
		getSupportLevel,
		isTrustedUser,
		getUserRole
	};
};

export type PaymentMethodType = any; // TODO

export interface PaymentMethod {
	getDefaultPaymentMethod(): PaymentMethodType;
	isEnterpriseAccount(): boolean;
}

interface PaymentMethodAPI {
	registerable: boolean;
	icon?: any;
	default?: boolean;
	description?: string;
	label?: string;

	getStatusCategory: () => string;
}

export class PaymentMethod implements PaymentMethodAPI {
	registerable: boolean;
	icon: any;
	default?: boolean;
	description?: string;
	label?: string;
	status?: string;

	method: PaymentMethodAPI;

	constructor(method: PaymentMethodAPI) {
		this.registerable = method.registerable;
		this.icon = method.icon;
		this.default = method.default || false;
		this.description = method.description;
		this.label = method.label;
		this.status = method.status;

		this.method = method;
	}

	getMethod() {
		return this.method;
	}

	getStatusCategory() {
		switch (this.status) {
			case PAYMENT_METHOD_STATUS_ENUM.CANCELED:
			case PAYMENT_METHOD_STATUS_ENUM.ERROR:
			case PAYMENT_METHOD_STATUS_ENUM.EXPIRED:
			case PAYMENT_METHOD_STATUS_ENUM.TOO_MANY_FAILURES:
				return 'error';
			case PAYMENT_METHOD_STATUS_ENUM.CANCELING:
			case PAYMENT_METHOD_STATUS_ENUM.CREATING:
			case PAYMENT_METHOD_STATUS_ENUM.MAINTENANCE:
			case PAYMENT_METHOD_STATUS_ENUM.PAUSED:
				return 'warning';
			case PAYMENT_METHOD_STATUS_ENUM.CREATED:
			case PAYMENT_METHOD_STATUS_ENUM.VALID:
				return 'success';
			default:
				return 'info';
		}
	}
}

export const DEFAULT_GET_OPTIONS = {
	onlyValid: false,
	transform: true // transform legacy payment methods to payment methods
};

export const PAYMENT_METHOD_STATUS_ENUM = {
	CANCELED: 'CANCELED',
	CANCELING: 'CANCELING',
	CREATED: 'CREATED',
	ERROR: 'ERROR',
	EXPIRED: 'EXPIRED',
	FAILED: 'FAILED',
	CREATING: 'CREATING',
	MAINTENANCE: 'MAINTENANCE',
	PAUSED: 'PAUSED',
	TOO_MANY_FAILURES: 'TOO_MANY_FAILURES',
	VALID: 'VALID'
};

export const paymentMethod = (environment: Environment): PaymentMethod => {
	const region = environment.getRegion();
	const user = environment.getUser();
	// const ovhPaymentMethod = useOvhPaymentMethod({
	// 	reketInstance: useReket(),
	// 	region
	// });

	const getPaymentMethod = (paymentMethodId: number) => {
		return useReket()
			.get(`/me/payment/method/${paymentMethodId}`)
			.then((paymentMethodOptions: any) => new PaymentMethod(paymentMethodOptions));
	};

	const getDefaultPaymentMethod = (options = DEFAULT_GET_OPTIONS) => {
		const params = options.onlyValid
			? {
					status: PAYMENT_METHOD_STATUS_ENUM.VALID
			  }
			: {};

		return useReket()
			.get('/me/payment/method', {
				params
			})
			.then((paymentMethodIds: number[]) =>
				Promise.all(paymentMethodIds.map((paymentMethodId) => getPaymentMethod(paymentMethodId)))
			)
			.catch((error: any) => (error.status === 404 ? [] : Promise.reject(error)));
		// return ovhPaymentMethod.getDefaultPaymentMethod();
	};

	const isEnterpriseAccount = () => {
		return user?.enterprise || false;
	};

	return {
		getDefaultPaymentMethod,
		isEnterpriseAccount
	};
};
