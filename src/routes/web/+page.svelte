<script>
	import Web from '$lib/components/dedicated/Web.svelte';
	import { currentUniverse } from '$lib/context/universe';
	import { onMount } from 'svelte';

	let bigModalDialog = false;
	let mediumModalDialog = false;

	onMount(() => {
		currentUniverse.set('web');
	});
</script>

<svelte:head>
	<title>Web</title>
	<meta name="description" content="Web" />
	<link rel="stylesheet" href="/assets/bootstrap-342.css" />
</svelte:head>

<Web />
