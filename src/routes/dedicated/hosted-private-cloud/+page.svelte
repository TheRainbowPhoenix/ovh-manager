<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('hpc');
	});
</script>

<svelte:head>
	<title>Hub</title>
	<meta name="description" content="Hub" />
</svelte:head>

<div class="text-column">
	<h1>Hub TODO</h1>
</div>
