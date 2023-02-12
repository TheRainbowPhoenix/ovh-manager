<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('marketplace');
	});
</script>

<svelte:head>
	<title>Marketplace</title>
	<meta name="description" content="Marketplace" />
</svelte:head>

<div class="text-column">
	<h1>Marketplace TODO</h1>
</div>
