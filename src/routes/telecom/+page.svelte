<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('telecom');
	});
</script>

<svelte:head>
	<title>Public Cloud</title>
	<meta name="description" content="Public Cloud" />
</svelte:head>

<div class="text-column">
	<h1>Public Cloud TODO</h1>
</div>
