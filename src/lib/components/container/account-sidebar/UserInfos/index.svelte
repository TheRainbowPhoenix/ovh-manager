<script lang="ts">
	import type { Environment } from '$lib/core/environment';
	import { t } from '$lib/i18n';
	import { userInfos, type UserInfos } from '../service';
	import UserDetails from './UserDetails.svelte';
	import UserInfosFooter from './UserInfosFooter.svelte';
	import UserRole from './UserRole.svelte';

	export let environment: Environment;

	$: user = userInfos(environment.getUser());
	let region = environment.getRegion() || 'EU';

	const cssBaseClassName = 'manager-account-sidebar-user-infos';
	const translationBase = 'user_account_menu';
	const userAccountURL = '/useraccount/dashboard';

	const userAccountClickHander = () => {
		// shell.getPlugin('tracking').trackClick({
		// 	name: 'hub::sidebar::profile::go-to-account',
		// 	type: 'action'
		// });
		console.debug('hub::sidebar::profile::go-to-account');
	};
</script>

<div class={`${cssBaseClassName} mb-3`}>
	<a
		target="_top"
		aria-label={$t(`${translationBase}_manage_my_account`)}
		href={userAccountURL}
		on:click={(event) => {
			userAccountClickHander;
		}}
		class={`${cssBaseClassName}_profile`}
	>
		<span class={`${cssBaseClassName}_initials ${cssBaseClassName}_initials-centered`}>
			{user.getUserNameInitials()}
		</span>

		{#if ['EU', 'CA'].includes(region)}
			<p class="oui-chip mb-1">
				<span class={`${cssBaseClassName}_text-small`}>
					{$t(
						`${translationBase}_support_level_${user.getSupportLevel()}${
							user.isTrustedUser() ? '_trusted' : ''
						}`
					)}
				</span>
			</p>
		{/if}
		<p class={`${cssBaseClassName}_profile_link mb-1`}>
			{user.getUserDisplayName()}
		</p>
	</a>
	<UserRole {user} {cssBaseClassName} {translationBase} />
	<UserDetails {user} {cssBaseClassName} />
	<UserInfosFooter {user} {cssBaseClassName} {translationBase} />
</div>

<style lang="scss">
	.manager-account-sidebar-user-infos {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens';

		$hub-text-color: #4d5592;

		$circle-radius: 2.5rem;

		background-color: $p-000;
		box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.075);
		text-align: center;
		border-radius: $base-border-radius-large;
		padding: 0.25rem;
		color: $hub-text-color;

		hr {
			height: 1px;
			border: 0;
			color: #eee;
			background-color: #eee;
			margin-top: 2rem;
		}

		&_text-small {
			font-size: 0.9rem;
		}

		& &_initials {
			width: $circle-radius * 2;
			height: $circle-radius * 2;
			display: block;
			font-size: $circle-radius;
			padding-top: $circle-radius * 0.2;
			background-color: $p-300;
			color: $p-000 !important;
			border-radius: $circle-radius;
			text-align: center;
			font-weight: normal;
		}

		& &_profile {
			&_link {
				color: $p-500;
				font-weight: 600;
			}

			&:hover,
			&:focus {
				text-decoration: none;

				.manager-account-sidebar-user-infos_initials {
					background-color: $p-400;
				}

				.manager-account-sidebar-user-infos_profile_link {
					color: $p-700;
				}
			}
		}

		p.oui-chip {
			color: $p-700;
			line-height: 1.875rem;
		}

		&_initials-centered {
			position: relative;
			top: -$circle-radius;
			margin: auto;
			margin-bottom: $circle-radius * -1.25;
		}

		&_user-name {
			button.btn.btn-link {
				text-decoration: none;
				width: 100%;

				span {
					color: $p-500;
					font-weight: 600;
				}

				.oui-icon {
					font-size: 1rem;
					vertical-align: middle;
					margin-left: 0.2rem;
					font-weight: 600;
				}
			}

			&__login {
				white-space: initial;
			}
		}

		&_role {
			white-space: initial;
		}

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

		.oui-badge {
			font-size: 0.8rem;
			font-weight: bold;
		}
	}
</style>
