<script lang="ts">
	import { t } from '$lib/i18n';

	export let targetURL: string = '#';
</script>

<a
	class="oui-navbar-link oui-navbar-link_tertiary oui-navbar-link_icon px-0 text-center"
	href={targetURL}
>
	<span aria-hidden="true" class="navbar-small-icon oui-icon oui-icon-search_extra-thin mr-0" />
	<span class="sr-only">{$t('navbar_search')}</span>
</a>
