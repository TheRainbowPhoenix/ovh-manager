<script lang="ts">
	import { t } from '$lib/i18n';

	export let onChange: (show: boolean) => void;

	let onCancel = () => {};
	let onConfirm = (showModal: boolean = false) => {};

	// TODO
	interface TrackObj {
		name: string;
		type: string;
	}

	function trackClick(t: TrackObj) {
		console.debug(t.name);
	}

	let trackingPlugin = {
		trackClick: trackClick
	};
</script>

<div
	on:click={(event) => {
		onCancel();
	}}
	on:keypress={() => {}}
	class="backdrop"
>
	<div class="modal">
		<h1>{$t('beta_modal_switch_title')}</h1>
		<p>{$t('beta_modal_switch_infos')}</p>
		<div class="d-flex flex-row-reverse justify-content-between">
			<button
				type="button"
				class="oui-button oui-button_primary float-right"
				on:click={(event) => {
					trackingPlugin.trackClick({
						name: 'topnav::switch_version_popin::go_to_survey',
						type: 'navigation'
					});
					onConfirm(true);
				}}
			>
				{$t('beta_modal_switch_accept')}
			</button>
			<button
				type="button"
				class="oui-button oui-button_secondary float-right mr-2"
				on:click={(event) => {
					trackingPlugin.trackClick({
						name: 'topnav::switch_versionpopin::decline_survey',
						type: 'navigation'
					});
					onConfirm();
				}}
			>
				{$t('beta_modal_switch_later')}
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	@import '@ovh-ux/ui-kit/dist/scss/tokens/_colors';
	@import '@ovh-ux/ui-kit/dist/scss/tokens/_fonts';
	@import '@ovh-ux/ui-kit/dist/scss/tokens/_globals';

	$z-index-backdrop: 2000;

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 80, 215, 0.75);
		z-index: $z-index-backdrop;
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		background-size: cover;
		padding: 1rem;
		border-radius: 0.5rem;
		max-width: 30rem;
		opacity: 1;

		h1 {
			font-size: 1rem;
			font-weight: 600;
			color: $p-800;
		}

		p {
			color: $p-600;
			font-weight: 400;
			font-size: 0.9rem;
		}
	}
</style>
