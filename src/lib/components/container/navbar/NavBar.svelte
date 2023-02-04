<script lang="ts">
	import Account from './Account.svelte';
	import Brand from './Brand.svelte';
	import Hamburger from './HamburgerMenu.svelte';
	import Search from './Search.svelte';
	import { fetchUniverses, getBrandURL, Universe } from './service';
	import UniversesComp from './Universes.svelte';

	import '$lib/assets/scss/modal.scss';
	import { onMount } from 'svelte';
	import Universes from './Universes.svelte';

	export let environment: Object = {}; // TODO

	let universes: Universe[] = [];
	let currentUniverse: string = 'currentUniverse';
	let isDropdownOpen = false;

	let searchURL = '#'; // TODO: to store

	onMount(async () => {
		fetchUniverses().then((u) => {
			universes = u;
		});
	});

	function brandClickHandler() {
		// shell.getPlugin('tracking').trackClick({
		//     name: `navbar::entry::logo`,
		//     type: 'action',
		// });
		console.debug('navbar::entry::logo');
	}

	function universeClickHandler(universe: Universe) {
		// shell.getPlugin('tracking').trackClick({
		//     name: `navbar::entry::${universe}`,
		//     type: 'action',
		// });
		console.debug('navbar::entry::${universe}');
	}
</script>

<div class="popoverClickAway" class:hidden={!isDropdownOpen} />

<div class="oui-navbar navbar">
	<Hamburger universe={currentUniverse} {universes} />
	<Brand targetURL={getBrandURL(universes)} on:click={brandClickHandler} />
	<Universes universe={currentUniverse} {universes} onClick={universeClickHandler} />
	<div class="oui-navbar-list oui-navbar-list_aside oui-navbar-list_end aside">
		{#if searchURL}
			<div class="oui-navbar-list__item">
				<Search targetURL={searchURL} />
			</div>
		{/if}
	</div>
</div>

<style>
	.navbar {
		padding-right: 2rem;
	}

	.aside {
		height: 2.75rem;
	}
</style>
