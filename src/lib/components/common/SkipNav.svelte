<script lang="ts">
	let body: HTMLElement;
	import { t } from '$lib/i18n';

	export let manualSkip = false;
</script>

<div bind:this={body}>
	<div class="skipnav">
		<a
			class="oui-button oui-button_ghost"
			href="#"
			on:click={() => document.getElementById('maincontent')?.focus()}
			>{$t('common_skip_to_main_content')}</a
		>
	</div>
	<div class="position-relative w-100 h-100 overflow-auto" style="overflow: auto">
		{#if !manualSkip}
			<div class="skiptarget">
				<a id="maincontent" href="#">-</a>
			</div>
		{/if}
		<slot />
	</div>
</div>

<!-- <div class="h-100 d-flex flex-column overflow-hidden">
	<div class="skipnav">
		<a
			class="oui-button oui-button_ghost"
			href=""
			on:click={() => document.getElementById('maincontent')?.focus()}
			>{$t('common_skip_to_main_content')}</a
		>
	</div>
</div> -->
<style>
	.skipnav a {
		width: 1px;
		height: 1px;
		position: fixed;
		left: -100%;
		top: auto;
		overflow: hidden;
		z-index: -1;
	}

	.skipnav a:active,
	.skipnav a:focus {
		width: auto;
		height: auto;
		left: 0.625rem;
		top: 0.625rem;
		overflow: auto;
		outline-width: 1px !important;
		outline-style: dotted !important;
		outline-color: initial !important;
		outline-offset: -2px !important;
		background-color: #fff;
		z-index: 1100;
	}

	.skiptarget {
		width: 1px;
		height: 1px;
		overflow: hidden;
		float: right;
		position: absolute;
	}
</style>
