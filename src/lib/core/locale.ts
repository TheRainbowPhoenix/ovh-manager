import { Region } from './environment';

export const CountryCode = {
	US: 'US',
	CA: 'CA',
	FR: 'FR',
	GB: 'GB',
	ES: 'ES',
	PL: 'PL',
	PT: 'PT',
	IT: 'IT',
	DE: 'DE'
};

export const LANGUAGES = {
	available: [
		{
			name: 'Deutsch',
			key: 'de_DE'
		},
		{
			name: 'English',
			key: 'en_GB'
		},
		{
			name: 'Español',
			key: 'es_ES'
		},
		{
			name: 'Français',
			key: 'fr_FR'
		},
		{
			name: 'Français (Canadien)',
			key: 'fr_CA'
		},
		{
			name: 'Italiano',
			key: 'it_IT'
		},
		{
			name: 'Polski',
			key: 'pl_PL'
		},
		{
			name: 'Português',
			key: 'pt_PT'
		}
	],
	defaultLoc: 'fr_FR',
	fallback: 'fr_FR',
	preferred: {
		en: {
			US: CountryCode.GB,
			CA: CountryCode.GB,
			EU: CountryCode.GB
		},
		fr: {
			US: CountryCode.CA,
			CA: CountryCode.CA,
			EU: CountryCode.FR
		}
	}
};

export const localeStorageKey = 'univers-selected-language';
export const localeRegex = /^([a-zA-Z]+)(?:[_-]([a-zA-Z]+))?$/;

const preferredCountry = (language: string, region: string) => {
	if (['FR', 'EN'].includes(language.toUpperCase())) {
		const customLanguage =
			LANGUAGES === null || LANGUAGES === void 0
				? void 0
				: (language in LANGUAGES.preferred && // @ts-ignore
						region in LANGUAGES.preferred[language] && // @ts-ignore
						LANGUAGES.preferred[language][region]) ||
				  CountryCode.GB;
		if (customLanguage) {
			return customLanguage;
		}
	}
	return language;
};

export const findLanguage = (language: string, country: string) => {
	let searchCountry = country;
	if (!country) {
		searchCountry = language;
	}
	const locale = `${language.toLowerCase()}_${searchCountry.toUpperCase()}`;
	const availableLangsKeys = LANGUAGES.available.map(({ key }) => key);
	if (availableLangsKeys.includes(locale)) {
		return locale;
	}
	const similarLanguage = availableLangsKeys.find(
		// @ts-ignore
		(val) => localeRegex.test(val) && val.match(localeRegex)[1] === language
	);
	if (similarLanguage) {
		return similarLanguage;
	}
	return LANGUAGES.defaultLoc;
};

export const findAvailableLocale: (userLocale: string, region?: string) => string = (
	userLocale: string,
	region = Region.EU
) => {
	let splittedLocale = null;
	if (userLocale.match(/[-_][0-9]+$/)) {
		splittedLocale = userLocale.split(/(-|_)/)[0].match(localeRegex);
	} else {
		splittedLocale = userLocale.match(localeRegex);
	}
	if (!splittedLocale) {
		return userLocale || LANGUAGES.defaultLoc;
	}
	const language = splittedLocale[1];
	const country = splittedLocale[2] ? splittedLocale[2] : preferredCountry(language, region);
	if (['cs', 'fi', 'lt', 'nl'].includes(language)) {
		return findAvailableLocale('en_GB');
	}
	return findLanguage(language, country);
};

export const detectUserLocale = () => {
	if (localStorage[localeStorageKey]) {
		return localStorage[localeStorageKey];
	}
	if (navigator.language) {
		return navigator.language;
	}

	if ('userLanguage' in navigator) {
		// @ts-ignore
		return navigator.userLanguage;
	}

	return LANGUAGES.defaultLoc;
};

export const saveUserLocale = (locale: string) => {
	localStorage[localeStorageKey] = locale;
};

export const convertLanguageFromOVHToBCP47 = (language: string) => {
	return language.replace('_', '-');
};
