<script lang="ts">
	import { t } from '$lib/i18n';
	import { debug, onMount } from 'svelte/internal';
	import { useReket } from '@ovh-ux/ovh-reket';
	import { Universe } from '../container/navbar/service';

	let products;
	export let tickets: any[] = []; // TODO
	let trackinPrefix;

	let loading = false;
	let hideHeading = false;

	export let me: any;

	export let items: any[] = [];

	let servicesData: any = null;

	let universes = ['Web Hosting & Domains', 'Bare Metal Cloud', 'Hosted Private Cloud'];

	onMount(async () => {
		let r = await fetch('/engine/2api/hub/catalog', {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				Accept: 'application/json'
			},
			credentials: 'same-origin'
		});

		r = await r.json();

		servicesData = r || {};

		// .then(function (e: any) {
		// 	return e.json(); // .services
		// })
		// .then(function (e: any) {
		// 	return e.data; // .services
		// });
	});

	// let catalog = useReket()
	// 	.get('/hub/services', {
	// 		serviceType: 'aapi'
	// 	})
	// 	.then(function (e: any) {
	// 		return e.data.data.serviccataloges;
	// 	});

	const filterBy = (data: any[], name: string) => {
		return data.filter((p) => p.categories.includes(name) && p.highlight);
	};
</script>

<div>
	<h1 class="oui-heading_2 d-inline-block">
		{$t('manager_hub_dashboard_welcome')}
		{me.firstname || '-'}!
	</h1>
	<div class="row">
		<div class="col-md-8">
			<!-- ovh-manager-hub-support -->
			<div class="oui-tile ovh-manager-hub-tile">
				<div class="oui-tile__body">
					<div class="manager-hub-support">
						{#if !tickets?.length && !loading}
							<div class="manager-hub-support__illustration" aria-hidden="true" />
							<h3 class="oui-heading_4" data-translate="hub_support_need_help">
								{$t('hub_support_need_help')}
							</h3>
							<p data-translate="hub_support_need_help_more">
								{$t('hub_support_need_help_more')}
							</p>
							<a
								class="manager-hub-support__link"
								on:click={() => {
									console.debug('hub::dashboard::activity::assistance::guide-welcome::go-to-docs');
								}}
								data-navi-id="helpBlock-link-to-guides"
								target="_top"
								href="https://docs.ovh.com/fr/"
							>
								<span data-translate="hub_support_help">{$t('hub_support_help')}</span>
								<span class="oui-icon oui-icon-arrow-right" aria-hidden="true" />
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<h2>{$t('manager_hub_order_dashboard_discover')}</h2>
	<p>{$t('manager_hub_order_dashboard')}</p>
	<div>
		<!-- {#if servicesDataProm}
			{#await servicesDataProm then services_data}
				{#each services_data.catalog.data as entry (entry.id)}
					<p>{entry.name}</p>
				{/each}
				{@debug services_data}
				{JSON.stringify(services_data)}
			{/await}
		{/if} -->
		{#if servicesData}
			{#each universes as universe}
				<h2 class="oui-heading_3">{universe}</h2>
				<div class="row">
					{#each filterBy(servicesData.data.catalog.data, universe) as entry (entry.id)}
						<!-- ngRepeat: product in products track by (product.category + '_' + product.productName) -->
						<div class="col-md-6 col-xl-4 mb-3">
							<ovh-manager-hub-tile heading="Domain transfer" badge-text="Domain name"
								><div class="oui-tile ovh-manager-hub-tile">
									{#if !hideHeading}
										<div class="ovh-manager-hub-tile__header">
											<h3 class="oui-tile__title ovh-manager-hub-tile__title">
												<span>{entry.name}</span>
												<span class="oui-badge oui-badge_info ovh-manager-hub-tile__badge"
													>{entry.category}</span
												>
											</h3>
											<!-- ngIf: $ctrl.onClick && !$ctrl.href && !$ctrl.hideAction -->
											<!-- ngIf: $ctrl.href && !$ctrl.hideAction -->
										</div>
									{/if}
									<div class="oui-tile__body">
										<p>
											{entry.description}
										</p>
										<div class="d-flex flex-row-reverse">
											{#if entry.order}
												<a
													class="oui-link_icon"
													on:click={() => {
														console.debug(
															'hub::dashboard::catalog::web-hosting &amp; domains::domain-transfer::order'
														);
													}}
													data-track-on="click"
													data-track-name="hub::dashboard::catalog::web-hosting &amp; domains::domain-transfer::order"
													data-navi-id="{entry.productName}-order"
													target="_top"
													href={entry.order}
												>
													<span>{$t('manager_hub_catalog_items_order')}</span>
													<span aria-hidden="true" class="oui-icon oui-icon-arrow-right" />
												</a>
											{/if}
										</div>
									</div>
								</div>
							</ovh-manager-hub-tile>
						</div>
					{/each}
					<!-- end ngRepeat: product in products track by (product.category + '_' + product.productName) -->
				</div>
			{/each}
			<!-- {@debug servicesData} -->
		{/if}
	</div>
</div>

<style lang="scss">
	.manager-hub-support__illustration {
		background-image: url(/assets/images/b7a4c049a9d6122ffe85c95141354af5.png);
		background-repeat: no-repeat;
		height: 10rem;
		background-position: 50%;
	}

	.ovh-manager-hub-tile__badge {
		line-height: 1.25;
		padding: 0.25rem 0.5rem;
		margin-left: 0.3rem;
		overflow: unset;
		font-size: 0.75rem;
		color: #000e9c;
		border-radius: 1rem;
		background-color: #bef1ff;
	}

	h1,
	h2 {
		margin-top: 1rem;
	}
</style>
