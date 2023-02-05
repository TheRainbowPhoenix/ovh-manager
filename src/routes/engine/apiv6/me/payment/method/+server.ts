import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = [12345678];

	return new Response(JSON.stringify(r));
};
