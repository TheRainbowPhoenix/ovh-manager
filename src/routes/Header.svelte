<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import NavBar from '$lib/components/container/navbar/NavBar.svelte';
	import NotificationsSidebar from '$lib/components/container/common/notifications-sidebar/NotificationsSidebar.svelte';

	let environment = {}; // TODO
</script>

<div class="_popoverClickAway_1djxe_1 _hidden_1djxe_12 sf-hidden" />
<NavBar {environment} />
<!-- AccountSideBar -->
<NotificationsSidebar />

<!--
<div class="oui-navbar _navbar_2e1hw_1">
	<div>
		<button
			role="button"
			type="button"
			class="oui-navbar-toggler oui-navbar-toggler_button sf-hidden"
			aria-expanded="false"
		/>
		<div
			class="oui-navbar-menu_toggle oui-navbar-menu oui-navbar-menu_fixed false sf-hidden"
			aria-expanded="true"
			role="menu"
		/>
	</div>
	<a class="oui-navbar__brand" href="#" aria-label="OVHcloud"
		><span class="oui-icon oui-icon-ovh" aria-hidden="true" /></a
	>
	<div class="oui-navbar-list">
		<div class="oui-navbar-list oui-navbar-list_main oui-navbar_desktop-only">
			<span>Loading universes...</span>
		</div>
	</div>
	<div class="oui-navbar-list oui-navbar-list_aside oui-navbar-list_end _aside_2e1hw_10">
		<div class="oui-navbar-list__item" />
		<div class="oui-navbar-list__item">
			<div class="oui-navbar-dropdown">
				<button
					aria-haspopup="false"
					aria-expanded="false"
					aria-label="Change the interface language"
					title="Change the interface language"
					type="button"
					class="oui-navbar-link oui-navbar-link_dropdown"
					><span class="oui-navbar-link__wrapper"
						><span class="oui-navbar-link__text">English</span><span
							class="oui-icon oui-icon-chevron-down ml-2"
						/></span
					></button
				>
				<div class="oui-navbar-menu__wrapper">
					<div class="oui-navbar-menu oui-navbar-menu_fixed oui-navbar-menu_end">
						<div class="oui-navbar-list_dropdown p-4">
							<span class="oui-navbar-list__title _title_wid3l_1"
								>Change the interface language</span
							>
							<ul class="oui-navbar-list">
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Deutsch</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Español</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Français</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Français (Canadien)</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Italiano</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Polski</button
									>
								</li>
								<li class="oui-navbar-list__item">
									<button class="oui-navbar-link oui-navbar-link_tertiary p-0" type="button"
										>Português</button
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="oui-navbar-list__item">
			<button
				role="button"
				type="button"
				class="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary _navbarLink_1a1lq_53"
				title="Notifications"
				aria-label="Notifications"
				><span class="oui-icon oui-icon-bell" aria-hidden="true"
					><span class="oui-icon__badge">3</span></span
				></button
			>
		</div>
		<button
			role="button"
			type="button"
			class="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary undefined"
			aria-label="My account"
			><span class="oui-navbar-link__wrapper oui-navbar-link__wrapper_border"
				><span class="oui-icon navbar-oui-icon oui-icon-user" aria-hidden="true" /><span
					class="oui-navbar-link__text">Phoebe Chan</span
				></span
			></button
		>
	</div>
</div>
<div class="manager-account-sidebar-wrapper" aria-expanded="false">
	<div class="manager-account-sidebar">
		<div class="manager-account-sidebar-user-infos mb-3">
			<a
				class="manager-account-sidebar-user-infos_profile"
				aria-label="Manage my account"
				href="https://www.ovh.com/manager/#/dedicated/useraccount/dashboard"
				target="_top"
				><span
					class="manager-account-sidebar-user-infos_initials manager-account-sidebar-user-infos_initials-centered"
					>PC</span
				>
				<p class="oui-chip mb-1">
					<span class="manager-account-sidebar-user-infos_text-small">Standard Support</span>
				</p>
				<p class="manager-account-sidebar-user-infos_profile_link mb-1">Phoebe Chan</p></a
			>
			<div
				class="manager-account-sidebar-user-infos_user-name mb-2"
				data-navi-id="account-sidebar-block"
			/>
			<p>
				<span class="d-block manager-account-sidebar-user-infos_text-small">Company Name</span><span
					class="d-block manager-account-sidebar-user-infos_text-small text-break"
					>phoebe.chan@konshin.ml</span
				><span class="d-block manager-account-sidebar-user-infos_text-small">cp1228647-ovh</span>
			</p>
			<div class="text-left manager-account-sidebar-user-infos_links">
				<hr class="my-1" />
				<button type="button" role="button" class="btn btn-link" data-navi-id="logout"
					>Log out</button
				>
			</div>
		</div>
		<div class="manager-account-sidebar-payment-method mb-4">
			<a
				class="d-flex flex-row align-items-center p-2"
				href="https://www.ovh.com/manager/#/dedicated/billing/payment/method"
				target="_top"
				><span class="mr-auto oui-icon oui-icon-credit-card_concept" aria-hidden="true" />
				<div class="m-auto p-1 minw-0 w-100">
					<h3>Payment method</h3>
					<p>No payment method</p>
				</div>
				<span class="ml-auto oui-icon oui-icon-arrow-right" aria-hidden="true" /></a
			>
		</div>
		<div class="mb-4" data-navi-id="account-sidebar-shortcuts-block">
			<h3>Shortcuts</h3>
			<div class="d-flex flex-wrap justify-content-around">
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a href="https://www.ovh.com/manager/#/dedicated/billing/autoRenew" target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-multi-device_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description"
								>Products and services</span
							></a
						>
					</div>
				</div>
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a href="https://www.ovh.com/manager/#/dedicated/billing/history" target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-receipt_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description">Invoices</span></a
						>
					</div>
				</div>
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a
							href="https://www.ovh.com/manager/#/dedicated/useraccount/support/level"
							target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-lifebuoy_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description"
								>Support level</span
							></a
						>
					</div>
				</div>
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a href="https://www.ovh.com/manager/#/hub/catalog" target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-book-open_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description"
								>Product catalogue</span
							></a
						>
					</div>
				</div>
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a href="https://www.ovh.com/manager/#/dedicated/useraccount/emails" target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-envelop-letter_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description"
								>Service emails</span
							></a
						>
					</div>
				</div>
				<div class="manager-account-sidebar-shortcuts_links">
					<div class="manager-account-sidebar-shortcuts-tile">
						<a href="https://www.ovh.com/manager/#/dedicated/contacts/services" target="_top"
							><span
								class="manager-account-sidebar-shortcuts-tile__icon oui-icon oui-icon-book-contact_concept"
								aria-hidden="true"
							/><span class="manager-account-sidebar-shortcuts-tile__description"
								>Contact management</span
							></a
						>
					</div>
				</div>
			</div>
		</div>
		<div
			class="manager-account-sidebar-links mb-5"
			data-navi-id="account-sidebar-usefulLinks-block"
		>
			<h3>Useful links</h3>
			<div>
				<span class="manager-account-sidebar-links_divider" aria-hidden="true" /><a
					class="d-flex"
					target="_blank"
					rel="noopener"
					href="https://help-beta.ovhcloud.com/csm/fr-home?id=csm_index"
					><span class="oui-icon oui-icon-lifebuoy_concept" aria-hidden="true" /><span
						>Help Centre</span
					></a
				>
			</div>
			<div>
				<span class="manager-account-sidebar-links_divider" aria-hidden="true" /><button
					class="btn btn-link d-flex"
					type="button"
					role="button"
					><span class="oui-icon oui-icon-speech-bubble_concept" aria-hidden="true" /><span
						>Live Chat</span
					></button
				>
			</div>
			<div>
				<span class="manager-account-sidebar-links_divider" aria-hidden="true" /><a
					class="d-flex"
					target="_blank"
					rel="noopener"
					href="https://www.status-ovhcloud.com/"
					><span class="oui-icon oui-icon-traffic-cone_concept" aria-hidden="true" /><span
						>Network status and incidents</span
					></a
				>
			</div>
			<div>
				<span class="manager-account-sidebar-links_divider" aria-hidden="true" /><a
					class="d-flex"
					target="_self"
					rel=""
					href="https://www.ovh.com/manager/#/dedicated/ticket"
					><span class="oui-icon oui-icon-envelop_concept" aria-hidden="true" /><span
						>My support tickets
					</span></a
				>
			</div>
			<div>
				<span class="manager-account-sidebar-links_divider" aria-hidden="true" /><a
					class="d-flex"
					target="_self"
					rel=""
					href="https://www.ovh.com/manager/#/dedicated/support/tickets/new"
					><span class="oui-icon oui-icon-user-support_concept" aria-hidden="true" /><span
						>Create a ticket</span
					></a
				>
			</div>
		</div>
	</div>
</div>
<div class="_notificationsSidebar_1a1lq_1 false" role="menu">
	<ul class="_notificationsList_10ikf_1">
		<li>
			<div class="_notificationsList_group_title_10ikf_38">17 hours ago</div>
			<div class="_notification_15xiq_1 position-relative d-flex">
				<span
					class="oui-icon oui-navbar-notification__icon oui-icon_bicolor oui-icon-info-circle"
					aria-hidden="true"
				/>
				<div>
					<div class="_notification_subject_15xiq_71">New Help Centre - Beta version</div>
					<div>
						<p>
							Explore the new beta version of the <a
								target="_blank"
								href="https://help-beta.ovhcloud.com/csm">Help</a
							> Centre.
						</p>
						<p>
							Share your feedback by clicking on the ‘Your opinion’ button in the bottom-right
							corner of this homepage.
						</p>
					</div>
				</div>
				<button type="button" class="_oui-badge_15xiq_53 oui-badge _oui-badge_error_15xiq_63"
					><span>Unread</span></button
				>
			</div>
			<div class="_notification_15xiq_1 position-relative d-flex">
				<span
					class="oui-icon oui-navbar-notification__icon oui-icon_bicolor oui-icon-info-circle"
					aria-hidden="true"
				/>
				<div>
					<div class="_notification_subject_15xiq_71">Data Processing Agreement</div>
					<div>
						The OVHcloud “Data Processing Agreement” is evolving. <a
							target="_blank"
							href="https://www.ovh.ie/personal-data-protection/">More information</a
						>
					</div>
				</div>
				<button type="button" class="_oui-badge_15xiq_53 oui-badge _oui-badge_error_15xiq_63"
					><span>Unread</span></button
				>
			</div>
			<div class="_notification_15xiq_1 position-relative d-flex">
				<span
					class="oui-icon oui-navbar-notification__icon oui-icon_bicolor oui-icon-info-circle oui-icon-error-circle"
					aria-hidden="true"
				/>
				<div>
					<div class="_notification_subject_15xiq_71">General information</div>
					<div>
						Fraudulent emails circulate and direct to scam websites claiming to be OVHcloud. <a
							target="_blank"
							href="https://docs.ovh.com/us/en/customer/scams-fraud-phishing">Find out more</a
						>
					</div>
				</div>
				<button type="button" class="_oui-badge_15xiq_53 oui-badge _oui-badge_error_15xiq_63"
					><span>Unread</span></button
				>
			</div>
		</li>
	</ul>
</div>

-->

<!--
<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>
-->
<style>
	/*
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	*/
</style>
