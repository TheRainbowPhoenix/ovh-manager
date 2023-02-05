<script lang="ts">
	import type { Environment } from '$lib/core/environment';
	import { capitalize } from '$lib/helpers/stringsHelper';
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { paymentMethod, userInfos, type PaymentMethodType, type UserInfos } from './service';

	export let environment: Environment;

	$: user = userInfos(environment.getUser());
	$: payment = paymentMethod(environment);
	let region = environment.getRegion() || 'EU';

	const cssBaseClassName = 'manager-account-sidebar-payment-method';
	const translationBase = 'user_account_menu';

	let paymentMethodURL = '/billing/payment/method';

	let loading = true;

	const paymentMethodClickHandler = () => {
		// shell.getPlugin('tracking').trackClick({
		// 	name: 'hub::sidebar::payment::go-to-payment-method',
		// 	type: 'action'
		// });
		console.debug('hub::sidebar::payment::go-to-payment-metho');
	};

	let defaultPaymentMethod: PaymentMethodType;

	onMount(async () => {
		let paymentMethod: PaymentMethodType = await payment.getDefaultPaymentMethod();

		console.log(paymentMethod);

		if (Array.isArray(paymentMethod)) {
			paymentMethod = paymentMethod[0];
		}

		defaultPaymentMethod = paymentMethod;

		loading = false;
	});
</script>

{#if !payment.isEnterpriseAccount()}
	<div class={`${cssBaseClassName} mb-4`}>
		<a
			target="_top"
			class="d-flex flex-row align-items-center p-2"
			href={paymentMethodURL}
			on:click={(event) => {
				paymentMethodClickHandler;
			}}
		>
			{#if !defaultPaymentMethod?.icon}
				<span aria-hidden="true" class="mr-auto oui-icon oui-icon-credit-card_concept" />
			{:else}
				<img
					aria-hidden="true"
					class="mr-1"
					src={defaultPaymentMethod?.icon?.data || ''}
					alt={defaultPaymentMethod?.icon?.label || ''}
				/>
			{/if}

			{#if loading}
				<div class="oui-skeleton oui-skeleton_s">
					<div class="oui-skeleton__loader" />
				</div>
			{:else}
				<div class="m-auto p-1 minw-0 w-100">
					<h3>{$t(`${translationBase}_title`)}</h3>

					{#if defaultPaymentMethod}
						<div class={`${cssBaseClassName}_label`}>
							<p class="m-0 text-truncate">{defaultPaymentMethod.label}</p>
							<span
								class={`${cssBaseClassName}_status oui-badge oui-badge_${
									defaultPaymentMethod?.getStatusCategory() || 'info'
								}`}
							>
								{$t(`${translationBase}_status_${defaultPaymentMethod.status}`)}
							</span>
						</div>
					{:else}
						<p>{$t(`${translationBase}_none`)}</p>
					{/if}
				</div>
			{/if}
			<span aria-hidden="true" class="ml-auto oui-icon oui-icon-arrow-right" />
		</a>
	</div>
{/if}

<style lang="scss">
	.manager-account-sidebar-payment-method {
		@import '@ovh-ux/ui-kit/dist/scss/_tokens.scss';
		//   @import '@ovh-ux/manager-hub/src/variables.scss';

		$p-100: #bef1ff;

		> a {
			background: $p-100;
			border-radius: 0.5rem;
			color: inherit;
			border: none;
			font: inherit;
			cursor: pointer;
			outline: inherit;
			width: 100%;
			text-decoration: none;
			transition: background-color 250ms;
		}

		> a:hover {
			background-color: $p-200;
			text-decoration: none;
		}

		img {
			width: 2.5rem;
		}

		h3 {
			font-size: 0.85rem;
			margin: 0;
			padding: 0;
			line-height: 1.5rem;
		}

		&_label {
			font-size: 0.75rem;

			> p {
				color: inherit;
			}
		}

		&_status {
			font-size: 0.8rem;
			font-weight: bold;
			max-width: none;
			line-height: 0.85rem;
		}

		.oui-badge {
			&_error {
				color: $ae-500;
			}

			&_warning {
				color: $aw-500;
			}

			&_success {
				color: $as-500;
			}
		}

		.oui-icon {
			color: $p-800;
		}

		.oui-icon-arrow-right {
			color: $p-500;
		}
	}
</style>
