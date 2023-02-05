import type { User } from '$lib/core/environment';

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
