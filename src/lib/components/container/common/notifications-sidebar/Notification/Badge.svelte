<script lang="ts">
	import { toggleNotificationReadStatus } from '$lib/core/notifications';
	import { t } from '$lib/i18n';
	export let active: boolean = false;
	export let notificationId: string = '';
</script>

<button
	type="button"
	on:click={(event) => {
		notificationId !== '' && toggleNotificationReadStatus(notificationId);
	}}
	class={`oui-badge ${active ? 'oui-badge_error' : 'oui-badge_info'}`}
>
	<span>{$t(`notification_${active ? 'unread' : 'read'}`)}</span>
</button>

<style lang="scss">
	@import '@ovh-ux/ui-kit/dist/scss/_tokens';

	button.oui-badge {
		position: absolute;
		font-size: 0.75rem;
		top: 1.25rem;
		right: 1.25rem;
		cursor: pointer;

		&_error {
			background-color: $ae-500;
			color: $p-000;
		}

		&_info {
			background-color: $p-500;
			color: $p-000;
		}
	}
</style>
