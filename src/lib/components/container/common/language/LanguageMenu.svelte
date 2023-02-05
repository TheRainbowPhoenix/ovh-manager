<script lang="ts">
	import { getAvailableLanguages, getCurrentLanguage, userLocale } from '$lib/i18n';
	import type { Writable } from 'svelte/store';
	import LanguageButton from './LanguageButton.svelte';
	import LanguageList from './LanguageList.svelte';

	export let onChange: (show: boolean) => void;
	export let setUserLocale: (locale: string) => void;
	// export let userLocale: Writable<string>;

	let show = false;

	let currentLangLabel = getCurrentLanguage().name;

	userLocale.subscribe((l) => {
		currentLangLabel = getCurrentLanguage().name;
	});

	const getLanguageLabel = () => {
		return getCurrentLanguage();
	};

	const onLocaleChange = (locale: string) => {
		// shell.getPlugin('i18n').setLocale(locale);
		setUserLocale(locale);
		show = false;
	};

	let availableLanguages = getAvailableLanguages();
</script>

{#if availableLanguages.length == 0}
	<div />
{:else}
	<div class="oui-navbar-dropdown">
		<LanguageButton {show} on:click={() => (show = !show)}>
			{currentLangLabel}
		</LanguageButton>
		<LanguageList hidden={!show} languages={availableLanguages} onSelect={onLocaleChange} />
	</div>
{/if}
