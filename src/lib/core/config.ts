import { writable } from 'svelte/store';
import { Environment, Region, type User } from './environment';
import { useReket } from '@ovh-ux/ovh-reket';

export const HOSTNAME_REGIONS: { [hostname: string]: string } = {
	'www.ovh.com': Region.EU,
	'ca.ovh.com': Region.CA,
	'us.ovhcloud.com': Region.US
};

interface OVHConfig {
	region: string;
	user: User;
	applicationURLs: string;
	universe: string;
	message: string;
	applications: { [name: string]: { universe: string } };
}

export const isTopLevelApplication = () => window.top === window.self;

export const fetchConfiguration = async (applicationName: string) => {
	const environment = new Environment();
	const configRequestOptions = {
		requestType: 'aapi',
		headers: Object.assign(
			{ 'Content-Type': 'application/json;charset=utf-8', Accept: 'application/json' }
			// getHeaders('/engine/2api/configuration')
		),
		credentials: 'same-origin'
	};
	let configurationURL = '/configuration';
	if (applicationName) {
		environment.setApplicationName(applicationName);
		configurationURL = `${configurationURL}?app=${encodeURIComponent(applicationName)}`;
	}
	const Reket = useReket(true);
	return Reket.get(configurationURL, configRequestOptions)
		.then((config: OVHConfig) => {
			environment.setRegion(config.region);
			environment.setUser(config.user);
			environment.setApplicationURLs(config.applicationURLs);
			environment.setUniverse(config.universe);
			environment.setMessage(config.message);
			environment.setApplications(config.applications);
			return environment;
		})
		.catch((err: any) => {
			if (err && err.status === 401 && !isTopLevelApplication()) {
				window.parent.postMessage({
					id: 'ovh-auth-redirect',
					url: `/auth?action=disconnect&onsuccess=${encodeURIComponent(window.location.href)}`
				});
			}
			environment.setRegion(Region.EU); // TODO
			// environment.setRegion(HOSTNAME_REGIONS[window.location.hostname]);
			return environment;
		});
};
