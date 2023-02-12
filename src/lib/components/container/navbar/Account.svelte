<script lang="ts">
	import { headerCtx } from '$lib/context/header';
	import type { User } from '$lib/core/environment';
	import { capitalize, truncate } from '$lib/helpers/stringsHelper';
	import { t } from '$lib/i18n';
	import { get } from 'svelte/store';

	export let user: User;

	const toggleSidebar = () => {
		console.log('navbar::action::user-bar');
		// uxPlugin.toggleAccountSidebarVisibility();
		// $headerCtx.isAccountSidebarVisible = uxPlugin.isAccountSidebarVisible()
		let visible = get(headerCtx).isAccountSidebarVisible || false;
		$headerCtx.isAccountSidebarVisible = !visible;

		// shell.getPlugin('tracking').trackClick({
		// 	name: 'navbar::action::user-bar',
		// 	type: 'action'
		// });
	};
</script>

<button
	type="button"
	aria-label={$t('navbar_account')}
	on:click={(event) => {
		toggleSidebar();
	}}
	class="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary navbarLink"
>
	<span class="oui-navbar-link__wrapper oui-navbar-link__wrapper_border">
		<span aria-hidden="true" class="oui-icon navbar-oui-icon oui-icon-user" />
		<span class="oui-navbar-link__text"
			>{capitalize(user.firstname || '')} {truncate(capitalize(user.name || ''), 10)}</span
		>
	</span>
</button>

<style>
	.navbarLink:disabled {
		opacity: 0.5;
	}
</style>
