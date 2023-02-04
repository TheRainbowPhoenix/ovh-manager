<script lang="ts">
	import { headerCtx } from '$lib/context/header';
	import {
		notifications,
		readAllNotifications,
		refreshNotifications
	} from '$lib/core/notifications';
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';

	let notificationsCount = 0;

	notifications.subscribe((n) => {
		notificationsCount = (n || []).filter(({ isActive }) => isActive()).length;
		console.log('notificationsCount : ', notificationsCount);
	});

	onMount(() => {
		setTimeout(() => {
			refreshNotifications();
		}, 5 * 1000); // 5 seconds refresh
	});

	// $: notificationsCount = ($notifications || []).filter(({ isActive }) => isActive()).length;

	function onClick(): void {
		// trackingPlugin.trackClick({
		// 	name: 'topnav::notifications',
		// 	type: 'action'
		// });
		console.debug('topnav::notifications');

		const initialVisibilityState = $headerCtx.isNotificationsSidebarVisible;
		$headerCtx.isNotificationsSidebarVisible = !initialVisibilityState;

		if (initialVisibilityState) {
			readAllNotifications();
		}
	}
</script>

<button
	type="button"
	title={$t('navbar_notifications')}
	aria-label={$t('navbar_notifications')}
	on:click={onClick}
	class="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary navbarLink"
>
	<span aria-hidden="true" class="oui-icon oui-icon-bell">
		{#if notificationsCount > 0}
			<span class="oui-icon__badge">{notificationsCount}</span>
		{/if}
	</span>
</button>

<style>
	.navbarLink:disabled {
		opacity: 0.5;
	}
</style>
