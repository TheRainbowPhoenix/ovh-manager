<script lang="ts">
	import { headerCtx } from '$lib/context/header';
	import PaymentMethod from './PaymentMethod.svelte';
	import Shortcuts from './Shortcuts.svelte';
	import UsefulLinks from './UsefulLinks.svelte';
	import UserInfos from './UserInfos/index.svelte';

	import { environment as environmentStore, type Environment } from '$lib/core/environment';
	import { onMount } from 'svelte';

	export let environment: Environment; // TODO

	environmentStore.subscribe((e) => {
		environment = e;
	});

	onMount(() => {
		const isSmallDevice = window.innerWidth <= 720; // TODO
		if (isSmallDevice) {
			$headerCtx.isAccountSidebarVisible = false;
		}
	});
</script>

<div
	aria-expanded={$headerCtx.isAccountSidebarVisible}
	class="manager-account-sidebar-wrapper"
	class:force-large-screen-display={$headerCtx.isAccountSidebarLargeScreenDisplayForced}
>
	<div class="manager-account-sidebar">
		<UserInfos {environment} />
		<PaymentMethod {environment} />
		<Shortcuts />
		<UsefulLinks />
	</div>
</div>

<style lang="scss">
	@import '@ovh-ux/ui-kit/dist/scss/_tokens.scss';
	// @import './sidebar.scss';

	$ovh-sidebar-width: 18.75rem;
	$jupiter-font-weight: 700;

	.manager-account-sidebar-wrapper {
		position: fixed;
		top: 2.75rem;
		bottom: 0;
		right: 0;
		z-index: 99;
		overflow-x: hidden;
		overflow-y: auto;
		transition: padding 0.1s ease-out, opacity 0.2s ease-out;
		box-shadow: 0 4px 6px 0 rgba(0, 14, 156, 0.2);
		opacity: 0;
		padding-left: $ovh-sidebar-width;
		pointer-events: none;

		.manager-account-sidebar {
			width: 0;
			a,
			button {
				pointer-events: none;
			}
		}

		&.force-large-screen-display {
			@media screen and (min-width: ($device-breakpoint-medium  - 1px)) {
				width: $ovh-sidebar-width;
				padding-left: 0;
				opacity: 1;
				pointer-events: auto;

				.manager-account-sidebar {
					width: $ovh-sidebar-width;
					a,
					button {
						pointer-events: auto;
					}
				}
			}
		}

		&[aria-expanded='true'] {
			width: $ovh-sidebar-width;
			padding-left: 0;
			opacity: 1;
			pointer-events: auto;

			.manager-account-sidebar {
				width: $ovh-sidebar-width;
				a,
				button {
					pointer-events: auto;
				}
			}
		}
	}

	.manager-account-sidebar {
		// @import 'bootstrap/scss/_functions.scss';
		// @import 'bootstrap/scss/_variables.scss';
		// @import 'bootstrap/scss/_mixins.scss';
		// @import 'bootstrap/scss/_utilities.scss';
		// @import 'bootstrap/scss/_grid.scss';
		// @import 'bootstrap/scss/_buttons.scss';
		// @import 'bootstrap/scss/_button-group.scss';
		// @import '@ovh-ux/manager-hub/src/variables.scss';

		background-color: $p-075;
		height: 100%;
		padding: 2rem;
		padding-top: 3rem;
		overflow: auto;

		.minw-0 {
			min-width: 0;
		}

		h3 {
			font-size: 1rem;

			font-weight: $jupiter-font-weight;
			color: $p-800;

			* {
				color: inherit;
			}
		}

		p {
			line-height: inherit;
		}
	}
</style>
