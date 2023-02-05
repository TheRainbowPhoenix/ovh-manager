<script lang="ts">
	import { t } from '$lib/i18n';
	import type { UserInfos } from '../service';

	export let cssBaseClassName: string = '';
	export let translationBase: string = '';
	export let user: UserInfos;
</script>

<div data-navi-id="account-sidebar-block" class={`${cssBaseClassName}_user-name mb-2`}>
	{#if user.getUserRole()}
		<div>
			<span class={`${cssBaseClassName}_role oui-badge oui-badge_warning`}>
				{$t(`${translationBase}_role_${user.getUserRole()}`)}
			</span>
		</div>
	{/if}
</div>
