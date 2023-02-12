<script lang="ts">
	import { Environment, environment } from '$lib/core/environment';
	import constants from '$lib/data/constants';
	import { get } from 'svelte/store';
	import SkipNav from '../common/SkipNav.svelte';
	import Configuration from './Configuration.svelte';

	let env: Environment = get(environment);

	environment.subscribe((e) => {
		env = e;
	});

	$: user = env.getUser();
	let region = env.getRegion() || 'EU';
</script>

<SkipNav manualSkip={true}>
	<div class="row">
		<div class="px-0 col-lg-12">
			<div class="skiptarget"><a id="maincontent" href="">-</a></div>
			<ovh-manager-banner-text />
			<account-migration-notification />
			<div class="container-fluid px-md-5 px-3 mt-3">
				<ui-router-breadcrumb>
					<ul />
				</ui-router-breadcrumb>

				<div class="pb-5 mt-3">
					<Configuration {user} constants={constants[region]} />
				</div>
			</div>
		</div>
	</div></SkipNav
>
