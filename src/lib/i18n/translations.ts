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
		no_notifications_description: 'You do not have any notifications.',

		user_account_menu_support_level_standard: 'Standard Support',
		user_account_menu_logout: 'Log out',

		user_account_menu_title: 'Account',
		user_account_menu_status_VALID: 'Valid',

		manager_hub_order_dashboard: 'Start the OVHcloud adventure and order your first product',
		manager_hub_order_dashboard_discover: 'Explore our products',

		manager_hub_dashboard_welcome: 'Welcome',

		hub_support_title: 'Recent support tickets',
		hub_support_see_more: 'See all',
		hub_support_read: 'Read',
		hub_support_state_open: 'Open',
		hub_support_state_closed: 'Closed',
		hub_support_state_unknown: 'Unknown',
		hub_support_account_management: 'Account management',
		hub_support_need_help: 'Need help?',
		hub_support_need_help_more: 'Need support using our products and services? Browse our guides.',
		hub_support_help: 'Understanding and using OVHcloud solutions',
		hub_support_error: 'Unable to retrieve support tickets',

		manager_hub_catalog_items_order: 'Order'
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
		no_notifications_description: "Vous n'avez aucune notification.",

		user_account_menu_support_level_standard: 'Support Standard',
		user_account_menu_logout: 'Déconnecter',

		user_account_menu_title: 'Compte',
		user_account_menu_status_VALID: 'Valide',

		manager_hub_order_dashboard: "Démarrez l'aventure OVHcloud et commandez votre premier produit",
		manager_hub_order_dashboard_discover: 'Découvrez nos produits',

		manager_hub_dashboard_welcome: 'Bienvenue',

		hub_support_title: "Dernières demandes d'assistance",
		hub_support_see_more: 'Voir tout',
		hub_support_read: 'Lire',
		hub_support_state_open: 'Ouvert',
		hub_support_state_closed: 'Fermé',
		hub_support_state_unknown: 'Inconnu',
		hub_support_account_management: 'Gestion du compte',
		hub_support_need_help: "Besoin d'aide ?",
		hub_support_need_help_more:
			'Des difficultés pour utiliser vos produits et services ? Consultez dès maintenant nos guides.',
		hub_support_help: 'Comprendre et utiliser vos services OVHcloud',
		hub_support_error: "Impossible de récupérer vos demandes d'assistance",

		manager_hub_catalog_items_order: 'Commander'
	}
};

export default _t;
