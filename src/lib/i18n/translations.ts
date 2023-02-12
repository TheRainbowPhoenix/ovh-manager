import ng_t from './ng-translate';

export interface TranslationsTable {
	[locale: string]: {
		[key: string]: string;
	};
}

const _t: TranslationsTable = {
	en: {
		...ng_t['en'],

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

		manager_hub_catalog_items_order: 'Order',

		user_account_menu_manage_my_account: 'Manage my account',
		user_account_menu_support_level_standard: 'Standard Support',
		user_account_menu_support_level_premium: 'Premium Support',
		'user_account_menu_support_level_premium-accredited': 'Premium Advanced Support',
		user_account_menu_support_level_business: 'Business Support',
		user_account_menu_support_level_enterprise: 'Enterprise Support',
		user_account_menu_support_level_standard_trusted: 'Standard Trusted Zone',
		user_account_menu_support_level_premium_trusted: 'Premium Trusted Zone',
		'user_account_menu_support_level_premium-accredited_trusted': 'Premium Advanced Trusted Zone',
		user_account_menu_support_level_business_trusted: 'Business Trusted Zone',
		user_account_menu_support_level_enterprise_trusted: 'Enterprise Trusted Zone',
		user_account_menu_role_user: 'Connected as a sub-user',
		user_account_menu_role_none: 'Connected in read-only mode',
		user_account_menu_logout: 'Log out',
		user_account_menu_payment_method_title: 'Payment method',
		user_account_menu_payment_method_status_CANCELED: 'Cancelled',
		user_account_menu_payment_method_status_CANCELING: 'Cancelling',
		user_account_menu_payment_method_status_CREATED: 'Created',
		user_account_menu_payment_method_status_ERROR: 'Error',
		user_account_menu_payment_method_status_EXPIRED: 'Expired',
		user_account_menu_payment_method_status_CREATING: 'Creating',
		user_account_menu_payment_method_status_MAINTENANCE: 'Under maintenance',
		user_account_menu_payment_method_status_PAUSED: 'Paused',
		user_account_menu_payment_method_status_VALID: 'Valid',
		user_account_menu_payment_method_status_TOO_MANY_FAILURES: 'Invalid',
		user_account_menu_payment_method_none: 'No payment method',
		user_account_menu_shortcuts_title: 'Shortcuts',
		user_account_menu_shortcuts_tile_services: 'Products and services',
		user_account_menu_shortcuts_tile_bills: 'Invoices',
		user_account_menu_shortcuts_tile_supportLevel: 'Support level',
		user_account_menu_shortcuts_tile_products: 'Product catalogue',
		user_account_menu_shortcuts_tile_emails: 'Service emails',
		user_account_menu_shortcuts_tile_contacts: 'Contact management',
		user_account_menu_useful_links_title: 'Useful links',
		user_account_menu_useful_links_helpCenter: 'Help Centre',
		user_account_menu_useful_links_chatbot: 'Live Chat',
		user_account_menu_useful_links_tasks: 'Network status and incidents',
		user_account_menu_useful_links_tickets: 'My support tickets ',
		user_account_menu_useful_links_createTicket: 'Create a ticket',
		user_account_menu_user_id: 'ID: <strong>{{nichandle}}</strong>',
		user_account_menu_profile: 'My profile ',
		user_account_menu_beta_feedback: 'Share your feedback!',
		user_account_menu_beta_feedback_text: 'Help us improve OVHcloud',
		user_account_menu_role_provider: 'Connected via SSO',

		welcome_title: 'Welcome to the',
		welcome_subtitle: 'OVHcloud Control Panel',
		loading: 'Loading...'
	},
	fr: {
		...ng_t['fr'],

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

		manager_hub_catalog_items_order: 'Commander',

		user_account_menu_manage_my_account: 'Gérer mon compte',
		user_account_menu_support_level_standard: 'Support Standard',
		user_account_menu_support_level_premium: 'Support Premium',
		'user_account_menu_support_level_premium-accredited': 'Support Premium Advanced',
		user_account_menu_support_level_business: 'Support Business',
		user_account_menu_support_level_enterprise: 'Support Enterprise',
		user_account_menu_support_level_standard_trusted: 'Zone de confiance Standard',
		user_account_menu_support_level_premium_trusted: 'Zone de confiance Premium',
		'user_account_menu_support_level_premium-accredited_trusted':
			'Zone de confiance Premium Advanced',
		user_account_menu_support_level_business_trusted: 'Zone de confiance Business',
		user_account_menu_support_level_enterprise_trusted: 'Zone de confiance Enterprise',
		user_account_menu_role_user: 'Connecté en tant que sous-utilisateur',
		user_account_menu_role_none: 'Connecté en lecture seule',
		user_account_menu_role_provider: 'Connecté en SSO',
		user_account_menu_user_id: 'Identifiant : <strong>{{nichandle}}</strong>',
		user_account_menu_profile: 'Mon profil',
		user_account_menu_logout: 'Me déconnecter',
		user_account_menu_payment_method_title: 'Moyen de paiement',
		user_account_menu_payment_method_status_CANCELED: 'Annulé',
		user_account_menu_payment_method_status_CANCELING: "En cours d'annulation",
		user_account_menu_payment_method_status_CREATED: 'Créé',
		user_account_menu_payment_method_status_ERROR: 'En erreur',
		user_account_menu_payment_method_status_EXPIRED: 'Expiré',
		user_account_menu_payment_method_status_CREATING: 'En cours de création',
		user_account_menu_payment_method_status_MAINTENANCE: 'En cours de maintenance',
		user_account_menu_payment_method_status_PAUSED: 'En pause',
		user_account_menu_payment_method_status_VALID: 'Valide',
		user_account_menu_payment_method_status_TOO_MANY_FAILURES: 'Invalide',
		user_account_menu_payment_method_none: 'Pas de moyen de paiement',
		user_account_menu_shortcuts_title: 'Raccourcis',
		user_account_menu_shortcuts_tile_services: 'Produits et services',
		user_account_menu_shortcuts_tile_bills: 'Factures',
		user_account_menu_shortcuts_tile_supportLevel: 'Niveau de support',
		user_account_menu_shortcuts_tile_products: 'Catalogue de produits',
		user_account_menu_shortcuts_tile_emails: 'E-mails de service',
		user_account_menu_shortcuts_tile_contacts: 'Gestion des contacts',
		user_account_menu_useful_links_title: 'Liens utiles',
		user_account_menu_useful_links_helpCenter: "Centre d'aide",
		user_account_menu_useful_links_chatbot: 'Live Chat',
		user_account_menu_useful_links_tasks: 'État du réseau et incidents',
		user_account_menu_useful_links_tickets: "Mes demandes d'assistance",
		user_account_menu_useful_links_createTicket: 'Créer un ticket',
		user_account_menu_beta_feedback: 'Donnez votre avis !',
		user_account_menu_beta_feedback_text: 'Aidez-nous à améliorer OVHcloud',

		welcome_title: 'Bienvenue sur votre',
		welcome_subtitle: 'Espace client OVHcloud',
		loading: 'Chargement en cours…'
	}
};

export default _t;
