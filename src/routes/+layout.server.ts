import { initShell } from '$lib/components/shell/shell';
import { fetchConfiguration } from '$lib/core/config';
import type { Environment } from '$lib/core/environment';

const loadData = async () => {
	const shellConfig = await fetchConfiguration('shell');

	return shellConfig;
};

export const load = async () => {
	return {
		// shellConfig: await loadData()
	};
};
