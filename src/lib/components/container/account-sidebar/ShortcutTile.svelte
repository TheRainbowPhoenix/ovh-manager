<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Shortcut } from './service';

	export let shortcut: Shortcut;

	const cssClassName = 'manager-account-sidebar-shortcuts-tile';
	const translationBase = 'user_account_menu_shortcuts_tile';

	const handleShortcutClick = (param: Shortcut) => {
		if (param?.tracking) {
			// shell.getPlugin('tracking').trackClick({
			// 	name: param.tracking,
			// 	type: 'navigation'
			// });
		}
	};
</script>

<div class={cssClassName}>
	<a
		target="_top"
		href={shortcut.url}
		on:click={(event) => {
			handleShortcutClick(shortcut);
		}}
	>
		<span aria-hidden="true" class={`${cssClassName}__icon oui-icon ${shortcut.icon}`} />
		<span class={`${cssClassName}__description`}>
			{$t(`${translationBase}_${shortcut.id}`)}
		</span>
	</a>
</div>

<style lang="scss">
	.manager-account-sidebar-shortcuts-tile {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens.scss';
		// @import '@ovh-ux/manager-hub/src/variables.scss';

		$p-000-white: #fff;
		$p-200: #85d9fd;
		$p-800: #00185e;
		// $notification-pill-font-color: $p-000-white;
		// $notification-pill-bg-color: #b91a1a;
		$notification-pill-size: 1.2rem;

		text-align: center;

		> a {
			display: block;
			color: $p-800 !important;
			font-weight: 600;

			&:hover {
				text-decoration: none;
			}
		}

		&__icon {
			display: flex;
			width: 4rem;
			height: 4rem;
			margin: auto;
			background-color: $p-000-white;
			border-radius: 0.4rem;
			justify-content: center;
			align-items: center;

			&:hover {
				background-color: $p-200;
			}
		}

		&__description {
			display: block;
			margin-top: 0.25rem;
			line-height: 1.25;
			font-size: 0.8rem;
			font-weight: 600;
		}

		.oui-icon {
			font-size: 2rem;
			margin-top: 1rem;
			color: $p-800;
		}
	}
</style>
