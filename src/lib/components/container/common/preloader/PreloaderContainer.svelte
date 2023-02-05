<script lang="ts">
	import OvhCloudPreloader from './OvhCloudPreloader.svelte';

	export let visible: boolean = false;
</script>

<div class="preloaderContainer">
	<OvhCloudPreloader {visible} />

	<slot />
</div>

<style lang="scss">
	.preloaderContainer {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
