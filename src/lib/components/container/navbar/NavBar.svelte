<script lang="ts">
	import Account from './Account.svelte';
	import Brand from './Brand.svelte';
	import Hamburger from './HamburgerMenu.svelte';
	import Search from './Search.svelte';
	import { fetchUniverses, getBrandURL, Universe } from './service';
	import Universes from './Universes.svelte';

	import { headerCtx } from '$lib/context/header';
	import NavReshuffleSwitchBack from '$lib/components/container/common/NavReshuffleSwitchBack.svelte';
	import LanguageMenu from '$lib/components/container/common/language/LanguageMenu.svelte';
	import { environment as environmentStore, type Environment } from '$lib/core/environment';

	import '$lib/assets/scss/modal.scss';

	import { onMount } from 'svelte';
	import { setUserLocale, userLocale } from '$lib/i18n';
	import NotificationsButton from '../common/notifications-sidebar/NotificationsButton.svelte';
	import { currentUniverse } from '$lib/context/universe';
	import { get } from 'svelte/store';

	export let environment: Environment; // TODO

	environmentStore.subscribe((e) => {
		environment = e;
	});

	let universes: Universe[] = [];
	let isDropdownOpen: boolean = false;

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
		currentUniverse.set(universe.universe);
		// shell.getPlugin('tracking').trackClick({
		//     name: `navbar::entry::${universe}`,
		//     type: 'action',
		// });
		console.debug('navbar::entry::${universe}');
	}
</script>

<div class="popoverClickAway" class:hidden={!isDropdownOpen} />

<div class="oui-navbar navbar">
	<Hamburger universe={get(currentUniverse)} {universes} />
	<Brand targetURL={getBrandURL(universes)} on:click={brandClickHandler} />
	<Universes {universes} onClick={universeClickHandler} />
	<div class="oui-navbar-list oui-navbar-list_aside oui-navbar-list_end aside">
		{#if searchURL}
			<div class="oui-navbar-list__item">
				<Search targetURL={searchURL} />
			</div>
		{/if}
		<div class="oui-navbar-list__item">
			<!-- TODO: random modal to ask to switch to beta -->
			<!-- 
			<NavReshuffleSwitchBack
				onChange={(show) => {
					isDropdownOpen = show;
					$headerCtx.isNotificationsSidebarVisible = false;
				}}
			/>
            -->
		</div>
		<div class="oui-navbar-list__item">
			<LanguageMenu
				{setUserLocale}
				onChange={(show) => {
					isDropdownOpen = show;
					$headerCtx.isNotificationsSidebarVisible = false;
				}}
			/>
		</div>
		<div class="oui-navbar-list__item">
			<NotificationsButton />
		</div>
		<Account user={environment.getUser()} />
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
