<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Universe } from './service';

	export let universe: string;
	export let universes: Universe[] = [];

	let opened = false;

	const shell = {}; //useShell();

	function onUniverseClick({ event, destination }: { event: MouseEvent; destination: string }) {
		if (universe === destination) {
			event.preventDefault();
			// shell.getPlugin('ux').requestClientSidebarOpen();
			opened = false;
		}
	}
</script>

<div>
	<button
		type="button"
		class="oui-navbar-toggler oui-navbar-toggler_button"
		on:click={(event) => {
			opened = !opened;
		}}
		aria-expanded={opened}
	>
		<span class="oui-navbar-toggler__hamburger">
			<span />
			<span />
			<span />
			<span />
		</span>
	</button>
	<div
		aria-expanded="true"
		role="menu"
		class="oui-navbar-menu_toggle oui-navbar-menu oui-navbar-menu_fixed"
		class:hamburgerOpen={opened}
	>
		{#each universes as u (u.universe)}
			<a
				href={u.url}
				on:click={(event) => {
					onUniverseClick({
						event,
						destination: u.universe
					});
				}}
				class={`oui-navbar-link oui-navbar-link_${u.isPrimary ? 'primary' : 'secondary'}`}
			>
				{$t(`navbar_universe_${u.universe}`)}
				{#if universe === u.universe}
					<span class="oui-icon oui-icon-chevron-right float-right" />
				{/if}
			</a>
		{/each}
	</div>
</div>

<style>
	.hamburgerOpen {
		visibility: visible !important;
		transform: translateX(0) !important;
	}
</style>
