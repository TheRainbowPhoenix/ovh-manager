import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
	id: number;
}

export const GET: (r: GetRequest) => Response = ({ url, id }) => {
	const r = {
		creationDate: '1970-00-00T00:00:00.000Z',
		default: true,
		description: '',
		expirationDate: null,
		icon: {
			data: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIxIDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMTIyODQ0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0yMCAzSDFNMTcgMGwzIDMtMyAzTTEgMTJoMTlNNCAxNWwtMy0zIDMtMyIvPgogICAgPC9nPgo8L3N2Zz4K',
			name: 'BANK_ACCOUNT',
			url: null
		},
		integration: 'POST_FORM',
		label: 'FR1220000XXXXXXXXXXXXXX0000',
		lastUpdate: '1970-00-00T00:00:00.000Z',
		oneclick: false,
		paymentMeanId: 12345678,
		paymentMethodId: 12345678,
		paymentSubType: 'NONE',
		paymentType: 'BANK_ACCOUNT',
		status: 'VALID'
	};

	return new Response(JSON.stringify(r));
};
