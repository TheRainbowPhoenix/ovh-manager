<script lang="ts">
	import HubOrderDashboard from './HubOrderDashboard.svelte';

	let body: HTMLElement;

	let accountSidebarVisible = true;

	import { environment as environmentStore, type Environment } from '$lib/core/environment';
	import { get } from 'svelte/store';

	let environment: Environment = get(environmentStore); // TODO

	environmentStore.subscribe((e) => {
		environment = e;
	});
</script>

<div bind:this={body}>
	<div class="skipnav">
		<a
			class="oui-button oui-button_ghost ng-scope"
			href="#"
			data-translate="manager_hub_skip_to_main_content"
			on:click={() => document.getElementById('maincontent')?.focus()}>Skip to main content</a
		>
	</div>
	<div class="position-relative w-100 h-100 overflow-auto">
		<div
			class="position-absolute hub-main w-100 h-100 hub-main-view_sidebar_expanded"
			class:hub-main-view_sidebar_expanded={accountSidebarVisible}
			style=""
		>
			<!-- ovh manager banner -->
			<div class="mb-5">
				<div class="skiptarget">
					<a id="maincontent" href="#">-</a>
				</div>
				<div class="hub-main-view pt-4">
					<div class="mx-3">
						<!-- ui-router-breadcrumb ><ul> ngRepeat: element in $ctrl.breadcrumb track by $index </ul></ui-router-breadcrumb -->
					</div>
					<div class="container-fluid hub-main-view_container">
						<!-- uiView -->
						<HubOrderDashboard me={environment.user} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media screen and (min-width: 1279px) {
		.hub-main-view_sidebar_expanded {
			margin-right: 18.75rem;
			max-width: calc(100% - 18.75rem);
		}
	}

	.hub-main-view_container {
		max-width: 80rem;
		margin: auto;
	}

	.container-fluid,
	.container-lg,
	.container-md,
	.container-sm,
	.container-xl {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	.hub-main-view h1,
	.hub-main-view h2 {
		margin-top: 1rem;
	}

	.hub-main-view .minw-0 {
		min-width: 0;
	}

	.skipnav a {
		width: 1px;
		height: 1px;
		position: fixed;
		left: -100%;
		top: auto;
		overflow: hidden;
		z-index: -1;
	}

	.skipnav a:active,
	.skipnav a:focus {
		width: auto;
		height: auto;
		left: 0.625rem;
		top: 0.625rem;
		overflow: auto;
		outline-width: 1px !important;
		outline-style: dotted !important;
		outline-color: initial !important;
		outline-offset: -2px !important;
		background-color: #fff;
		z-index: 1100;
	}

	.skiptarget {
		width: 1px;
		height: 1px;
		overflow: hidden;
		float: right;
		position: absolute;
	}
</style>
