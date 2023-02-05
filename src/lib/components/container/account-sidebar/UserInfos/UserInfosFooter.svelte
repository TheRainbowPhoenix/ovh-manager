<script lang="ts">
	import { t } from '$lib/i18n';
	import type { UserInfos } from '../service';

	export let cssBaseClassName: string = '';
	export let translationBase: string = '';
	export let user: UserInfos;

	const logoutHandler = () => {
		// shell.getPlugin('tracking').trackClick({
		// 	name: 'hub::sidebar::profile::go-to-log-out',
		// 	type: 'action'
		// });
		console.debug('hub::sidebar::profile::go-to-log-out');
		// shell.getPlugin('auth').logout();
	};
</script>

<div class={`text-left ${cssBaseClassName}_links`}>
	<hr class="my-1" />
	<button
		type="button"
		data-navi-id="logout"
		class="btn btn-link"
		on:click={(event) => {
			logoutHandler;
		}}
	>
		{$t(`${translationBase}_logout`)}
	</button>
</div>

<style lang="scss">
	@import 'bootstrap/scss/_functions.scss';
	@import 'bootstrap/scss/_variables.scss';
	@import 'bootstrap/scss/_mixins.scss';
	@import 'bootstrap/scss/_utilities.scss';
	@import 'bootstrap/scss/_grid.scss';
	@import 'bootstrap/scss/_buttons.scss';
	@import 'bootstrap/scss/_button-group.scss';
	hr {
		height: 1px;
		border: 0;
		color: #eee;
		background-color: #eee;
		margin-top: 2rem;
	}

	.manager-account-sidebar-user-infos {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens';

		$hub-text-color: #4d5592;

		$circle-radius: 2.5rem;

		&_links {
			clear: both;
			text-decoration: none;

			.btn.btn-link {
				color: $p-500;
				font-weight: 600;
				text-decoration: none;

				&:hover {
					color: $p-700;
					text-decoration: none;
				}
			}
		}
	}
</style>
