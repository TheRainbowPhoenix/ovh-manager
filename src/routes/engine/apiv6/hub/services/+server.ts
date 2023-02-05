import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = { status: 'OK', data: { services: { status: 'OK', data: { count: 0, data: {} } } } };

	return new Response(JSON.stringify(r));
};
