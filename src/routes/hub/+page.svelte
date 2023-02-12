<script>
	import HubMain from '$lib/components/hub/HubMain.svelte';
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	onMount(() => {
		currentUniverse.set('hub');
	});
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="User Dashboard" />
</svelte:head>

<div class="text-column">
	<HubMain />
</div>
