import { writable, type Writable } from 'svelte/store';

export const Region = {
	US: 'US',
	CA: 'CA',
	EU: 'EU'
};

export const ALLOWED_REGIONS = [Region.EU, Region.CA, Region.US];
export const DEFAULT_REGION = Region.EU;

export interface User {
	firstname?: string;
	name?: string;
	supportLevel?: {
		level?: string;
	};
	isTrusted?: boolean;
	auth?: any;
	email?: string;
	nichandle?: string;
	organisation?: string;
}

export class Environment {
	region: string;
	userLocale: string;
	version?: string | null;
	user: User; // TODO
	applicationName: string;
	universe: string | null;
	applicationURLs: { [id: string]: string }; // TODO
	message: {}; // TODO
	applications: { [name: string]: { universe: string } }; // TODO

	constructor(config = null) {
		this.region = DEFAULT_REGION;
		this.userLocale = 'en'; // findAvailableLocale(detectUserLocale(), this.region);
		this.version = null;
		this.user = {};
		this.applicationName = '';
		this.universe = null;
		this.applicationURLs = {};
		this.message = {};
		this.applications = {};
		Object.assign(this, config);
	}
	setRegion(region = DEFAULT_REGION) {
		if (!ALLOWED_REGIONS.includes(region)) {
			throw new Error(`Region ${region} is not allowed`);
		}
		this.region = region;
	}
	getRegion() {
		return this.region;
	}
	setUser(user: User) {
		this.user = user;
	}
	getUser(): User {
		return this.user;
	}
	setUserLocale(userLocale: string) {
		// const locale = findAvailableLocale(userLocale, this.getRegion());
		// saveUserLocale(locale);
		this.userLocale = userLocale; // locale;
	}
	getUserLocale() {
		return this.userLocale;
	}
	getUserLanguage() {
		return this.userLocale.split('_')[0];
	}
	setVersion(version: string) {
		this.version = version;
	}
	getVersion() {
		return this.version;
	}
	setApplicationName(name: string) {
		this.applicationName = name;
	}
	getApplicationName() {
		return this.applicationName;
	}
	setUniverse(universe: string) {
		this.universe = universe;
	}
	setUniverseFromApplicationId(applicationId: string) {
		this.universe = this.applications[applicationId].universe;
		return this.universe;
	}
	getUniverse() {
		return this.universe;
	}
	setApplicationURLs(applicationURLs: {}) {
		this.applicationURLs = applicationURLs;
	}
	getApplicationURLs() {
		return this.applicationURLs;
	}
	getApplicationURL(id: string) {
		return this.applicationURLs[id];
	}
	setMessage(message: string) {
		this.message = message;
	}
	getMessage() {
		return this.message;
	}
	getApplications() {
		return this.applications;
	}
	setApplications(applications: { [name: string]: { universe: string } }) {
		this.applications = applications;
	}
}

let _defEnv = new Environment();

export let environment = writable<Environment>(_defEnv);
