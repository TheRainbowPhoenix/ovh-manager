<script lang="ts">
	import { toggleNotificationReadStatus } from '$lib/core/notifications';
	import { t } from '$lib/i18n';
	import '../notification.scss';

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
	@import '../notification.scss';
</style>
