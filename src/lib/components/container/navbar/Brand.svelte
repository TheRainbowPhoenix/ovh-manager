<script lang="ts">
	export let targetURL: string;
</script>

<a class="oui-navbar__brand" href={targetURL} aria-label="OVHcloud" on:click>
	<span class="oui-icon oui-icon-ovh" aria-hidden="true" />
</a>
