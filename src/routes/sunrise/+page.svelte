<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('sunrise');
	});
</script>

<svelte:head>
	<title>Sunrise</title>
	<meta name="description" content="Sunrise" />
</svelte:head>

<div class="text-column">
	<h1>Sunrise TODO</h1>
</div>
