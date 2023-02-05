<script lang="ts">
	import type { Notification } from '$lib/core/notifications';
	import './notification.scss';
	import NotificationIcon from './Notification/Icon.svelte';
	import NotificationItem from './Notification/Item.svelte';
	import NotificationLink from './Notification/Link.svelte';
	import NotificationBadge from './Notification/Badge.svelte';
	import NotificationContent from './Notification/Content.svelte';

	export let notifications: Notification[] = [];
	export let title: string;
</script>

<li>
	<div class="notificationsList_group_title">{title}</div>

	{#each notifications as notification, key (`notification-${key}`)}
		<NotificationItem>
			<NotificationIcon level={notification.level} />

			{#if notification.urlDetails.href}
				<NotificationLink url={notification.getUrl()} notificationId={notification.id}>
					<NotificationContent
						description={notification.description}
						subject={notification.subject}
					/>
				</NotificationLink>
			{:else}
				<NotificationContent
					description={notification.description}
					subject={notification.subject}
				/>
			{/if}

			{#if !notification.isCompleted()}
				<NotificationBadge active={notification.isActive()} notificationId={notification.id} />
			{/if}
		</NotificationItem>
	{/each}
</li>

<style lang="scss">
	.notificationsList_group_title {
		font-size: 1.125rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}
</style>
