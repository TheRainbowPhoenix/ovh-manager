import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = {
		region: 'EU',
		user: {
			legalform: 'other',
			italianSDI: null,
			currency: { code: 'EUR', symbol: '€' },
			companyNationalIdentificationNumber: null,
			zip: null,
			phoneCountry: 'UNKNOWN',
			nationalIdentificationNumber: null,
			organisation: 'Company Name',
			spareEmail: null,
			name: 'Name',
			vat: null,
			phone: null,
			email: 'user.name@mail.com',
			area: null,
			corporationType: null,
			firstname: 'User',
			fax: null,
			nichandle: 'nu1112233-ovh',
			ovhCompany: 'ovh',
			city: null,
			customerCode: '0000-0000-00',
			language: 'fr_FR',
			state: 'incomplete',
			address: null,
			birthCity: null,
			sex: null,
			country: 'UNKNOWN',
			ovhSubsidiary: 'FR',
			birthDay: null,
			supportLevel: { level: 'standard' },
			certificates: ['email-validated'],
			isTrusted: false,
			auth: {
				method: 'account',
				user: null,
				description: null,
				roles: ['ADMIN'],
				allowedRoutes: null
			},
			enterprise: false
		},
		applicationURLs: {
			cloud: 'https://www.ovh.com/manager/cloud/repsac/',
			dedicated: 'https://www.ovh.com/manager/dedicated/',
			hub: 'https://www.ovh.com/manager/hub/',
			'public-cloud': 'https://www.ovh.com/manager/public-cloud/',
			telecom: 'https://www.ovhtelecom.fr/manager/telecom/',
			web: 'https://www.ovh.com/manager/web/',
			sunrise: 'https://www.ovh.com/manager/sunrise/',
			billing: 'https://www.ovh.com/manager/dedicated/#/billing',
			user: 'https://www.ovh.com/manager/dedicated/',
			exchange: 'https://www.ovh.com/manager/web/',
			sharepoint: 'https://www.ovh.com/manager/web/',
			office: 'https://www.ovh.com/manager/web/',
			telephony: 'https://www.ovhtelecom.fr/manager/telecom/',
			'pack-xdsl': 'https://www.ovhtelecom.fr/manager/telecom/',
			overthebox: 'https://www.ovhtelecom.fr/manager/telecom/',
			freefax: 'https://www.ovhtelecom.fr/manager/telecom/',
			sms: 'https://www.ovhtelecom.fr/manager/telecom/'
		},
		universe: '',
		message: null,
		applications: {
			cloud: {
				universe: 'server',
				url: 'https://www.ovh.com/manager/cloud/repsac/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/cloud/repsac/'
			},
			dedicated: {
				universe: 'server',
				url: 'https://www.ovh.com/manager/dedicated/',
				container: { isDefault: false, enabled: true, path: 'dedicated' },
				publicURL: 'https://www.ovh.com/manager/#/dedicated'
			},
			hub: {
				universe: 'hub',
				url: 'https://www.ovh.com/manager/hub/',
				container: { isDefault: true, enabled: true, path: 'hub' },
				publicURL: 'https://www.ovh.com/manager/#/hub'
			},
			'public-cloud': {
				universe: 'public-cloud',
				url: 'https://www.ovh.com/manager/public-cloud/',
				container: { isDefault: false, enabled: true, path: 'public-cloud' },
				publicURL: 'https://www.ovh.com/manager/#/public-cloud'
			},
			telecom: {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: true, path: 'telecom' },
				publicURL: 'https://www.ovhtelecom.fr/manager/#/telecom'
			},
			web: {
				universe: 'web',
				url: 'https://www.ovh.com/manager/web/',
				container: { isDefault: false, enabled: true, path: 'web' },
				publicURL: 'https://www.ovh.com/manager/#/web'
			},
			sunrise: {
				url: 'https://www.ovh.com/manager/sunrise/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/sunrise/'
			},
			billing: {
				universe: 'server',
				url: 'https://www.ovh.com/manager/dedicated/#/billing',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/dedicated/#/billing'
			},
			user: {
				universe: 'server',
				url: 'https://www.ovh.com/manager/dedicated/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/dedicated/'
			},
			exchange: {
				universe: 'web',
				url: 'https://www.ovh.com/manager/web/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/web/'
			},
			sharepoint: {
				universe: 'web',
				url: 'https://www.ovh.com/manager/web/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/web/'
			},
			office: {
				universe: 'web',
				url: 'https://www.ovh.com/manager/web/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovh.com/manager/web/'
			},
			telephony: {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovhtelecom.fr/manager/telecom/'
			},
			'pack-xdsl': {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovhtelecom.fr/manager/telecom/'
			},
			overthebox: {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovhtelecom.fr/manager/telecom/'
			},
			freefax: {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovhtelecom.fr/manager/telecom/'
			},
			sms: {
				universe: 'telecom',
				url: 'https://www.ovhtelecom.fr/manager/telecom/',
				container: { isDefault: false, enabled: false },
				publicURL: 'https://www.ovhtelecom.fr/manager/telecom/'
			}
		}
	};

	return new Response(JSON.stringify(r));
};
