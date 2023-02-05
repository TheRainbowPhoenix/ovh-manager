import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = [
		{ universe: 'hub', url: '/hub', external: false },
		{
			universe: 'server',
			url: '/dedicated/bare-metal-cloud',
			external: false
		},
		{
			universe: 'hpc',
			url: '/dedicated/hosted-private-cloud',
			external: false
		},
		{
			universe: 'public-cloud',
			url: '/public-cloud/?onboarding',
			external: false
		},
		{ universe: 'web', url: '/web', external: false },
		{ universe: 'telecom', url: '/telecom', external: false },
		{ universe: 'sunrise', url: '/sunrise', external: false },
		{ universe: 'marketplace', url: '/marketplace', external: true }
	];

	return new Response(JSON.stringify(r));
};
