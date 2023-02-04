export const SECONDARY_UNIVERSES: string[] = [];
export const TRANSLATE_NAMESPACE = 'navbar';

export type Universe = {
	isPrimary: boolean;
	universe: string;
	url: string;
	external?: boolean;
};

export async function fetchUniverses(): Promise<Universe[]> {
	let r = await fetch('/engine/2api/universes?version=beta', {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Accept: 'application/json'
		},
		credentials: 'same-origin'
	});
	let universes = await r.json();
	return universes.map((universe: Universe) => {
		return {
			isPrimary: !SECONDARY_UNIVERSES.includes(universe.universe),
			universe: universe.universe,
			url: universe.url
		};
	});
}

export function getBrandURL(universes: Universe[]): string {
	return '/';
}
export const Universe = () => {};
