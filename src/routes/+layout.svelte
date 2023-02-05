<script lang="ts">
	import Preloader from '$lib/components/container/common/preloader/Preloader.svelte';
	import type Shell from '$lib/components/shell/shell';
	import { initShell } from '$lib/components/shell/shell';

	import { environment as environmentStore, type Environment } from '$lib/core/environment';
	import { onMount, setContext } from 'svelte';

	import Header from './Header.svelte';
	import './styles.css';

	let shell: Shell;

	let preloaderVisible: boolean = false;

	// export let environment: Environment;

	// initShell().then((s) => {
	// 	shell = s;
	// 	const environment: Environment = shell.getPlugin('environment').getEnvironment();

	// 	const locale = environment.getUserLocale();
	// 	// const config = () => import(`./config-${environment.getRegion()}.js`);

	// 	console.log(shell.getPlugin('environment').getEnvironment());
	// });
	onMount(async () => {
		shell = await initShell();
		// 	shell = s;
		const environment: Environment = shell.getPlugin('environment').getEnvironment();

		environmentStore.set(environment);

		const locale = environment.getUserLocale();
		// 	// const config = () => import(`./config-${environment.getRegion()}.js`);

		console.log(shell.getPlugin('environment').getEnvironment());

		preloaderVisible = true;

		// });
		// setContext('shell', shell);
		// let shell = await initShell();
	});
</script>

<!-- <Progress animating={progressANimating} />-->
<div class="managerShell">
	<!-- Suspense NavReshuffleBetaAccessModal -->
	<div class="managerShell_header">
		<Header />
	</div>
	<div class="managerShell_content">
		<!-- if isMfaEnrollmentVisible => MfaEnrollment forced={isMfaEnrollmentForced} onHide={hideMfaEnrollment} -->
		<Preloader visible={preloaderVisible}>
			<slot />
		</Preloader>

		<iframe title="app" role="document" src="about:blank" />
	</div>
	<div class="managerShell_footer">
		<p>Build with <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
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
