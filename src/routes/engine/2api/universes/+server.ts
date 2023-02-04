import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = [
		{ universe: 'hub', url: 'https://www.ovh.com/manager/#/hub', external: false },
		{
			universe: 'server',
			url: 'https://www.ovh.com/manager/#/dedicated/bare-metal-cloud',
			external: false
		},
		{
			universe: 'hpc',
			url: 'https://www.ovh.com/manager/#/dedicated/hosted-private-cloud',
			external: false
		},
		{
			universe: 'public-cloud',
			url: 'https://www.ovh.com/manager/#/public-cloud/?onboarding',
			external: false
		},
		{ universe: 'web', url: 'https://www.ovh.com/manager/#/web', external: false },
		{ universe: 'telecom', url: 'https://www.ovhtelecom.fr/manager/#/telecom', external: false },
		{ universe: 'sunrise', url: 'https://www.ovh.com/manager/sunrise/', external: false },
		{ universe: 'marketplace', url: 'https://marketplace.ovhcloud.com/', external: true }
	];

	return new Response(JSON.stringify(r));
};
