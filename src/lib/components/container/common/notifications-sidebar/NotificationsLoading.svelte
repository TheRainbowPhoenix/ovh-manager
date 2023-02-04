<script>
	import NotificationItem from './Notification/Item.svelte';
	import './notification.scss';
</script>

<li>
	<div class="notificationsGroup_title">
		<div class="oui-skeleton oui-skeleton_s">
			<div class="oui-skeleton__loader" />
		</div>
	</div>
	<NotificationItem>
		<div>
			<div class="notification_subject">
				<div class="oui-skeleton oui-skeleton_s">
					<div class="oui-skeleton__loader" />
				</div>
			</div>
			<div>
				<div class="oui-skeleton">
					<div class="oui-skeleton__loader" />
				</div>
				<div class="oui-skeleton">
					<div class="oui-skeleton__loader" />
				</div>
				<div class="oui-skeleton">
					<div class="oui-skeleton__loader" />
				</div>
			</div>
		</div>
	</NotificationItem>
</li>

<style lang="scss">
	@import './notification.scss';
</style>
