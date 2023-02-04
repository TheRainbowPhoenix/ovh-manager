<script>
	import { t } from '$lib/i18n';
	import './notification.scss';
</script>

<li>
	<div>
		<p class="notificationsList_empty_placeholder">
			<span
				aria-hidden="true"
				class="oui-icon oui-navbar-notification__icon oui-icon-success-circle"
			/>
			<span>{$t('no_notifications_title')}</span>
		</p>
		<div>{$t('no_notifications_description')}</div>
	</div>
</li>

<style lang="scss">
	@import './notification.scss';
</style>
