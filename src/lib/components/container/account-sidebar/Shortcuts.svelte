<script lang="ts">
	import type { Environment } from '$lib/core/environment';
	import { t } from '$lib/i18n';
	import { getShortcuts, type Shortcut } from './service';
	import ShortcutTile from './ShortcutTile.svelte';
	import { environment } from '$lib/core/environment';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	let env: Environment = get(environment);

	environment.subscribe((e) => {
		env = e;
	});

	$: user = env.getUser();
	let region = env.getRegion() || 'EU';

	let shortcuts: Shortcut[] = [];

	const cssClassName = 'manager-account-sidebar-shortcuts';
	const translationBase = 'user_account_menu_shortcuts';

	onMount(async () => {
		shortcuts = getShortcuts(region, user);
	});
</script>

<div data-navi-id="account-sidebar-shortcuts-block" class="mb-4">
	<h3>{$t(`${translationBase}_title`)}</h3>
	<div class={`d-flex flex-wrap justify-content-${shortcuts.length > 2 ? 'around' : 'start'}`}>
		{#each shortcuts as shortcut, index (`shortcut-tile-${index}`)}
			<div class={`${cssClassName}_links`}>
				<ShortcutTile {shortcut} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.manager-account-sidebar-shortcuts {
		&_links {
			max-width: 33%;
			flex: 1 1 auto;
		}
	}

	h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #00185e;
		margin: 0px;
	}
</style>
