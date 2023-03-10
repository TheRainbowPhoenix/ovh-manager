import { writable } from 'svelte/store';

export type HeaderContextType = {
	isAccountSidebarVisible: boolean;
	isAccountSidebarLargeScreenDisplayForced: boolean;
	setIsAccountSidebarVisible(isVisible: boolean): void;
	isNotificationsSidebarVisible: boolean;
	setIsNotificationsSidebarVisible(isVisible: boolean): void;
};

export const headerCtx = writable<HeaderContextType>({
	isAccountSidebarVisible: true,
	isAccountSidebarLargeScreenDisplayForced: false, // TODO ?
	isNotificationsSidebarVisible: false
} as HeaderContextType);
