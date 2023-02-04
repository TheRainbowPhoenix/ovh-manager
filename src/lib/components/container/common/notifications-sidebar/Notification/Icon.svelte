<script lang="ts">
	export let level: string;

	const getIconClassName = (notificationLevel: string): string => {
		switch (notificationLevel) {
			case 'error':
			case 'warning':
			case 'success':
			case 'info':
				return `oui-icon-${notificationLevel}-circle`;
			case 'incident':
				return 'oui-icon-clock-wait';
			default:
				return 'oui-icon_bicolor';
		}
	};
</script>

<span
	aria-hidden="true"
	class={`oui-icon oui-navbar-notification__icon oui-icon_bicolor oui-icon-info-circle ${getIconClassName(
		level
	)}`}
/>
