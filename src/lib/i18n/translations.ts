interface TranslationsTable {
	[locale: string]: {
		[key: string]: string;
	};
}

const _t: TranslationsTable = {
	en: {
		'homepage.title': 'Your Title',
		'homepage.welcome': 'Hi <strong>{{name}}</strong>, how are you?',
		'homepage.time': 'The current time is: {{time}}',

		// TODO: move this to separate files ?

		navbar_universe_sunrise: 'Sunrise',
		navbar_universe_hub: 'Dashboard',
		navbar_universe_partners: 'Partners ',
		'navbar_universe_public-cloud': 'Public Cloud',
		navbar_universe_server: 'Bare Metal Cloud',
		navbar_universe_telecom: 'Telecom',
		navbar_universe_web: 'Web Cloud',
		navbar_universe_hpc: 'Hosted Private Cloud',
		navbar_universe_marketplace: 'Marketplace',
		navbar_loading_universes: 'Loading universes...',
		navbar_notifications: 'Notifications',
		navbar_language_change: 'Select interface language',
		navbar_account: 'My account',
		navbar_search: 'Search',

		language_change: 'Change the interface language',

		notifications_mark_as_read: 'Mark as read',
		notifications_mark_as_unread: 'Mark as unread',
		notification_read: 'Read',
		notification_unread: 'Unread',
		no_notifications_title: 'You are up to date!',
		no_notifications_description: 'You do not have any notifications.'
	},
	fr: {
		'homepage.title': 'Votre titre',
		'homepage.welcome': 'Hola, <strong>{{name}}</strong>, ¿cómo estás?',
		'homepage.time': 'La hora actual es: {{time}}',

		// TODO: move this to separate files ?

		navbar_universe_sunrise: 'Sunrise',
		navbar_universe_hub: 'Tableau de bord',
		navbar_universe_partners: 'Partenaires',
		'navbar_universe_public-cloud': 'Public Cloud',
		navbar_universe_server: 'Bare Metal Cloud',
		navbar_universe_telecom: 'Télécom',
		navbar_universe_web: 'Web Cloud',
		navbar_universe_hpc: 'Hosted Private Cloud',
		navbar_universe_marketplace: 'Marketplace',
		navbar_loading_universes: 'Chargement des univers…',
		navbar_notifications: 'Notifications',
		navbar_language_change: "Changer la langue de l'interface",
		navbar_account: 'Mon compte',
		navbar_search: 'Rechercher',

		language_change: "Changer la langue de l'inferface",

		notifications_mark_as_read: 'Marquer comme lu',
		notifications_mark_as_unread: 'Marquer comme non lu',
		notification_read: 'Lu',
		notification_unread: 'Non lu',
		no_notifications_title: 'Vous êtes à jour !',
		no_notifications_description: "Vous n'avez aucune notification."
	}
};

export default _t;
