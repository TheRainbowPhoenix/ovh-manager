<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('server');
	});
</script>

<svelte:head>
	<title>Bare Metal Cloud</title>
	<meta name="description" content="Bare Metal Cloud" />
</svelte:head>

<div class="text-column">
	<h1>Bare Metal Cloud TODO</h1>
</div>
