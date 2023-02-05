<script lang="ts">
	import { t } from '$lib/i18n';
	import type { UserInfos } from '../service';

	export let cssBaseClassName: string = '';
	export let user: UserInfos;
</script>

<p>
	{#if user.getUser()?.auth?.method === 'provider'}
		<span class={`d-block ${cssBaseClassName}_text-small text-break`}>
			{user.getUser().auth.user}
		</span>
	{:else}
		{#if user.getUser()?.organisation}
			<span class={`d-block ${cssBaseClassName}_text-small`}>
				{user.getUser().organisation}
			</span>
		{/if}

		<span class={`d-block ${cssBaseClassName}_text-small text-break`}>
			{user.getUser().email}
		</span>
	{/if}

	{#if user.getUser()?.email !== user.getUser()?.nichandle}
		<span class={`d-block ${cssBaseClassName}_text-small`}>
			{user.getUser().nichandle}
		</span>
	{/if}
</p>
