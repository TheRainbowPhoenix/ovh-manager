<script lang="ts">
	import { t, type Language } from '$lib/i18n';

	// import type { KeyPairName } from '@ovh-ux/manager-config';

	export let languages: Language[];
	export let hidden: boolean;
	export let onSelect: (key: string) => void;
</script>

<div class="oui-navbar-menu__wrapper" {hidden}>
	<div class="oui-navbar-menu oui-navbar-menu_fixed oui-navbar-menu_end">
		<div class="oui-navbar-list_dropdown p-4">
			<span class="oui-navbar-list__title title">
				{$t('language_change')}
			</span>
			<ul class="oui-navbar-list">
				{#each languages as { name, key }}
					<li class="oui-navbar-list__item">
						<button
							type="button"
							class="oui-navbar-link oui-navbar-link_tertiary p-0"
							on:click={() => {
								onSelect(key);
							}}
						>
							{name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.title {
		color: #00185e;
		font-weight: bold;
		font-size: 14px;
		line-height: 1.43;
	}
</style>
