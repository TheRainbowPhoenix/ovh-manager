<script lang="ts">
	import type { Universe } from './service';
	import { t } from '$lib/i18n';

	export let onClick: (universe: Universe) => void;
	export let universe: string = '';
	export let universes: Array<Universe>;
</script>

<div class="oui-navbar-list">
	<div class="oui-navbar-list oui-navbar-list_main oui-navbar_desktop-only">
		{#each universes as u (u.universe)}
			<a
				href={u.url}
				on:click={(event) => {
					onClick(u);
				}}
				{...u.external && {
					rel: 'noopener',
					target: '_blank'
				}}
				class={`
              oui-navbar-link
              oui-navbar-link_${u.isPrimary ? 'primary' : 'secondary'}
              ${universe === u.universe ? 'oui-navbar-link_active' : ''}
            `}
			>
				{$t(`navbar_universe_${u.universe}`)}
			</a>
		{/each}

		{#if !universes.length}
			<span>{$t('navbar_loading_universes')}</span>
		{/if}
	</div>
</div>
