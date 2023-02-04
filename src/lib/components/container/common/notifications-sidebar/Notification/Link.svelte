<script lang="ts">
	import { toggleNotificationReadStatus } from '$lib/core/notifications';

	export let url: string;
	export let notificationId: string;
</script>

<a
	href={url}
	on:click={() => {
		return toggleNotificationReadStatus(notificationId, true);
	}}
>
	<slot />
</a>
