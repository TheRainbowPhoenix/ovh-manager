<script lang="ts">
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';

	export let show: boolean = false;

	let isSmallDevice = false;

	onMount(() => {
		isSmallDevice = window.innerWidth <= 720; // TODO
	});
</script>

<button
	type="button"
	aria-haspopup={show}
	aria-expanded={show}
	aria-label={$t('language_change')}
	title={$t('language_change')}
	on:click
	class={`oui-navbar-link oui-navbar-link_dropdown ${isSmallDevice ? 'p-0' : ''}`}
>
	<span class="oui-navbar-link__wrapper">
		<span class="oui-navbar-link__text"><slot /></span>

		{#if !isSmallDevice}
			<span class="oui-icon oui-icon-chevron-down ml-2" />
		{/if}
	</span>
</button>

<style>
</style>
