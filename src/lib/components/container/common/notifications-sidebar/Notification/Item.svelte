<div class="notification position-relative d-flex">
	<slot />
</div>

<style lang="scss">
	.notification {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens';

		background-color: $p-000;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: $base-border-radius-large;
		text-decoration: none;
		color: $p-800-text;
		font-size: 0.875rem;
		box-shadow: $base-box-shadow-primary;
	}
</style>
