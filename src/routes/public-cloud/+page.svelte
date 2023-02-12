<script>
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('public-cloud');
	});
</script>

<svelte:head>
	<title>Hosted Private Cloud</title>
	<meta name="description" content="Hosted Private Cloud" />
</svelte:head>

<div class="text-column">
	<h1>Hosted Private Cloud TODO</h1>
</div>
