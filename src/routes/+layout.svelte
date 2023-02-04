<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="managerShell">
		<div class="managerShell_header">
			<Header />
		</div>
		<div class="managerShell_content">
			<main>
				<slot />
			</main>
			<iframe title="app" role="document" src="about:blank" />
		</div>
		<div class="managerShell_footer">
			<p>Build with <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</div>
	</div>
</div>

<style lang="scss">
	.managerShell {
		display: flex;
		flex-flow: column;
		height: 100%;
		overflow: hidden;

		&_header {
			flex: 0 1 auto;
		}

		&_content {
			flex: 1 1 auto;
			height: 100%; /* For Safari */

			iframe {
				width: 100%;
				height: 100%;
				border: none;
			}
		}

		&_footer {
			flex: 0 1 auto;
		}
	}
</style>
