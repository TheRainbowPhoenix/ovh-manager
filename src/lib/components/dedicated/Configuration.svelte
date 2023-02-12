<script lang="ts">
	import type { User } from '$lib/core/environment';
	import type { Constant } from '$lib/data/constants';
	import { fallbackLanguage, getCurrentLanguage, t } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let user: User;
	export let constants: Constant;

	export let subsidiary = 'FR';
	export let urlToAllGuides = '???';
	export let helpCenterURLs = {
		FR: '#'
	};

	let sectionNames = ['sd', 'pcc']; // vps ?

	type SectionLink = {
		url: string;
		title: string;
		atInternetClickTag: string;
	};

	type Section = {
		name: string;
		links: SectionLink[];
	};

	export let sections: { [name: string]: Section } = {}; // TODO

	function getURLFromSection(section: string | { [key: string]: string }) {
		if (typeof section === 'string') {
			return section;
		}
		return section[getCurrentLanguage().locale] || section[fallbackLanguage.locale];
	}

	onMount(async () => {
		sections = sectionNames.reduce(
			(sections, sectionName) => ({
				...sections,
				[sectionName]: {
					name: sectionName,
					links: getURLFromSection(constants.TOP_GUIDES[sectionName])
				}
			}),
			{}
		);

		console.log(sections);
	});
</script>

<div>
	<div class="text-center">
		{#if user.isTrusted}
			<ovh-manager-trusted-nic-label />
		{/if}
	</div>
	<div class="text-center py-5">
		<ovh-manager-banner class="d-block mb-4" />

		<h1 class="d-inline">
			<span>{$t('welcome_to_your_manager_1')}</span>
			<span>{$t('welcome_to_your_manager_2')}</span>
		</h1>
		{#if subsidiary !== 'FR'}
			<p class="lead">{$t('core_top_guides_header', { t0: urlToAllGuides })}</p>
		{/if}
		<div class="row" data-ng-if="$ctrl.subsidiary === 'FR'">
			<p class="lead col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
				<span>{$t('core_top_guides_header_fr')}</span>
				<a
					class="oui-link_icon"
					href={helpCenterURLs.FR}
					target="_blank"
					rel="noopener, noreferrer"
				>
					<span>{$t('otrs_menu_help_center')}</span>
					<span class="oui-icon oui-icon-external-link" aria-hidden="true" />
					<span class="sr-only">{$t('core_new_tab')}</span>
				</a>.
			</p>
		</div>
	</div>
	<div class="row d-md-flex">
		<div class="col-md-10 col-lg-8 mx-md-auto">
			<div class="oui-tile mb-5" data-ng-repeat="section in $ctrl.sections track by $index">
				{#each Object.entries(sections) as [title, section]}
					<h2 class="oui-tile__title">{$t('core_type_of_guide_' + section.name)}</h2>
					<div class="oui-tile__body">
						{#each section.links as link, index}
							<div
								class="oui-tile__item oui-tile__item_button"
								data-ng-repeat="link in section.links track by $index"
							>
								<a
									target="_blank"
									rel="noreferrer"
									class="oui-tile__button oui-button oui-button_icon-right oui-button_ghost oui-button_block"
									href={link.url}
								>
									<span>{$t(link.title)}</span>
									<span class="oui-icon oui-icon-external-link" aria-hidden="true" />
								</a>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	ovh-manager-configuration {
		@media (max-width: 768px) {
			.trusted-nic-label {
				display: block;
				margin: 0 -1rem;
				margin-top: -2rem;
			}

			.oui-badge {
				border-radius: 0;
				max-width: none;
			}
		}
	}
</style>
