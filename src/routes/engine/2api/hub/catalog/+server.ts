import { error } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = {
		status: 'OK',
		data: {
			catalog: {
				status: 'OK',
				data: [
					{
						id: 20426,
						name: 'Volume Snapshot',
						description: 'Trigger a snapshot on your Block Storage volumes',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Volume Snapshot'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'VOLUME_SNAPSHOT',
						order: 'https://www.ovhcloud.com/fr/public-cloud/volume-snapshot',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20894,
						name: 'Domain transfer',
						description:
							'Is your domain name currently registered with another registrar?You can follow our simple procedure for domain transfer to OVHcloud. You get a range of services, such as 10MB of web hosting space, a 5GB email account, and web redirection management.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Web Hosting & Domains', 'Domain name', 'Domain transfer'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'DOMAIN_TRANSFER',
						order: 'https://www.ovhcloud.com/fr/domains/domain-transfer/',
						highlight: true,
						universe: 'Web Hosting & Domains',
						category: 'Domain name'
					},
					{
						id: 21197,
						name: 'Cold Archive',
						description:
							'Get our most cost-effective storage type for long-term data archiving on a tape storage infrastructure.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Cold Archive'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'COLD_ARCHIVE',
						order: 'https://www.ovhcloud.com/fr/public-cloud/cold-archive/',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20466,
						name: 'Databases',
						description: 'Harness the power of your data by maintaining control of your resources.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Databases'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'DATABASES',
						order: 'https://www.ovhcloud.com/fr/public-cloud/databases',
						featureAvailability: 'databases',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20837,
						name: 'OVHcloud Load Balancer',
						description:
							'Scale to meet your demand with any of our cloud solutions, in any of our datacentres.  With the OVHcloud Load Balancer, you can balance the load between services spread across multiple datacentres.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'OVHcloud Load Balancer'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'IP_LOAD_BALANCER',
						order: 'https://www.ovh.com/fr/solutions/load-balancer/',
						featureAvailability: 'ip-load-balancer',
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20838,
						name: 'vRack',
						description:
							'With vRack (virtual rack) technology, you can connect, isolate and distribute OVHcloud products within one or more private networks, if they are compatible.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'vRack'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'VRACK',
						order:
							"https://www.ovh.com/fr/order/express/#/new/express/resume?products=~(~(planCode~'vrack~quantity~1~productId~'vrack))",
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20447,
						name: 'Nutanix on OVHcloud',
						description:
							'The Nutanix on OVHcloud solution combines Nutanix Cloud Platform software licences with dedicated, Nutanix-qualified OVHcloud Hosted Private Cloud infrastructure — so you can pre-deploy a Nutanix hyperconverged environment (HCI) in just a few hours.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Hosted Private Cloud', 'Platform', 'Nutanix on OVHcloud'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'NUTANIX',
						order: 'https://www.ovhcloud.com/fr/lp/nutanix/',
						excludeSubsidiaries: ['ASIA', 'AU', 'SG'],
						featureAvailability: 'nutanix',
						universe: 'Hosted Private Cloud',
						category: 'Platform'
					},
					{
						id: 20934,
						name: 'Gateway',
						description:
							'Connect your private instances to the internet securely and use floating IPs to expose your private network services flexibly on the web.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'Gateway'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'GATEWAYS',
						order: 'https://www.ovhcloud.com/fr/public-cloud/gateway/',
						featureAvailability: 'public-gateways',
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20375,
						name: 'Cloud Archive',
						description:
							'Archive your data over the long term in a cloud storage space, accessible via standard protocols.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Cloud Archive'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'CLOUD_ARCHIVE',
						order: 'https://www.ovhcloud.com/fr/public-cloud/cloud-archive',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20431,
						name: 'Workflow Management',
						description:
							'Automate your tasks to operate cloud resources based on your business logic, and adapt them to suit any situation',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Public Cloud',
							'Containers and orchestration',
							'Workflow Management'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'WORKFLOW_MANAGEMENT',
						order: 'https://www.ovhcloud.com/fr/public-cloud/orchestration',
						universe: 'Public Cloud',
						category: 'Containers and orchestration'
					},
					{
						id: 20633,
						name: 'Horizon',
						description:
							'Use the original OpenStack web interface to effortlessly manage your cloud resources',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Management Interfaces', 'Horizon'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'HORIZON',
						order: 'https://docs.ovh.com/fr/public-cloud/presentation-dhorizon/',
						universe: 'Public Cloud',
						category: 'Management Interfaces'
					},
					{
						id: 20470,
						name: 'AI Notebooks',
						description:
							'Get a quick, simple start launching your Jupyter or VS Code notebooks in the cloud',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'AI & machine learning', 'AI Notebooks'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'NOTEBOOKS',
						order: 'https://www.ovhcloud.com/fr/public-cloud/ai-notebooks',
						featureAvailability: 'notebooks',
						universe: 'Public Cloud',
						category: 'AI & machine learning'
					},
					{
						id: 20374,
						name: 'Block Storage',
						description:
							'Create storage volumes, which can be used as additional disks and secured via triple replication for data.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Block Storage'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'BLOCK_STORAGE',
						order: 'https://www.ovhcloud.com/fr/public-cloud/block-storage',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20825,
						name: 'Enterprise File Storage',
						description:
							'Enterprise File Storage, powered by NetApp. Connect of all your OVHcloud solutions to a high-performance file storage service for your most critical business applications.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Bare Metal Cloud',
							'Storage and Backup (BMC)',
							'Enterprise File Storage'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'NETAPP',
						order: 'https://www.ovh.com/manager/#/dedicated/netapp/new',
						highlight: true,
						featureAvailability: 'netapp',
						universe: 'Bare Metal Cloud',
						category: 'Storage and Backup (BMC)'
					},
					{
						id: 20379,
						name: 'Data Processing',
						description: 'Launch your Apache Spark processing tasks quickly and easily',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Data Analytics', 'Data Processing'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'DATA_PROCESSING',
						order: 'https://www.ovhcloud.com/fr/public-cloud/data-processing',
						universe: 'Public Cloud',
						category: 'Data Analytics'
					},
					{
						id: 20854,
						name: 'Veeam Enterprise',
						description:
							'Unlock the power of Veeam Backup & Replication. With OVHcloud, you can enjoy total freedom in terms of how you configure your backups once you have deployed your solution.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Hosted Private Cloud',
							'Storage and Backup',
							'Veeam Enterprise'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'VEEAM_ENTERPRISE',
						order: 'https://www.ovh.com/fr/storage-solutions/veeam-enterprise.xml',
						featureAvailability: 'veeam-enterprise:order',
						universe: 'Hosted Private Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20407,
						name: 'Object Storage',
						description: 'Enjoy unlimited on-demand storage, accessible via S3 API.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Object Storage'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'OBJECT_STORAGE',
						order: 'https://www.ovhcloud.com/fr/public-cloud/object-storage',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20847,
						name: 'Veeam Cloud Connect',
						description:
							'Easily and automatically outsource backups in the OVHcloud secure cloud. Using the Veeam Availability Suite®, you can ensure that your data is replicated in our datacentres.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Bare Metal Cloud',
							'Storage and Backup (BMC)',
							'Veeam Cloud Connect'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'VEEAM_CLOUD_CONNECT',
						order: 'https://www.ovh.com/fr/storage-solutions/veeam-cloud-connect/',
						featureAvailability: 'veeam-cloud-connect',
						universe: 'Bare Metal Cloud',
						category: 'Storage and Backup (BMC)'
					},
					{
						id: 20415,
						name: 'Private SQL Databases',
						description:
							'Works perfectly alongside all of our OVHcloud products, e.g. VPS, dedicated servers, Public Cloud instances and Cloud Web hosting',
						lang: 'en_GB',
						categories: ['Catalogs', 'Web Hosting & Domains', 'Databases', 'Private SQL Databases'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'PRIVATE_DATABASE',
						order: 'https://www.ovh.com/fr/hebergement-web/options-sql.xml',
						featureAvailability: 'private-database',
						universe: 'Web Hosting & Domains',
						category: 'Databases'
					},
					{
						id: 20473,
						name: 'OVHcloud AI Training',
						description:
							'Train your AI, machine learning and deep learning models efficiently and easily, and optimise your GPU usage.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Public Cloud',
							'AI & machine learning',
							'OVHcloud AI Training'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'AI_TRAINING',
						order: 'https://www.ovhcloud.com/fr/public-cloud/ai-training/',
						universe: 'Public Cloud',
						category: 'AI & machine learning'
					},
					{
						id: 20390,
						name: 'Instance Backup',
						description: 'Get a backup service for your instances',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Storage and Backup', 'Instance Backup'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'INSTANCES_BACKUP',
						order: 'https://www.ovhcloud.com/fr/public-cloud/instance-backup',
						universe: 'Public Cloud',
						category: 'Storage and Backup'
					},
					{
						id: 20456,
						name: 'Web hosting',
						description:
							'Want to create a blog, build a professional website or develop an e-commerce platform? OVHcloud web hosting solutions offer simplicity, security and high performance.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Web Hosting & Domains', 'Web hosting'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'WEB_HOSTING',
						order: 'https://www.ovh.com/fr/hebergement-web/',
						highlight: true,
						featureAvailability: 'hosting',
						universe: 'Web Hosting & Domains',
						category: 'Web hosting'
					},
					{
						id: 20394,
						name: 'Microsoft 365',
						description:
							'Securely access and edit your documents anytime, anywhere, so you can work however you work best. ',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Web Hosting & Domains',
							'Collaborative Solutions',
							'Microsoft 365'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'LICENSE_OFFICE',
						order: 'https://www.ovh.com/fr/office-365/',
						featureAvailability: 'office',
						universe: 'Web Hosting & Domains',
						category: 'Collaborative Solutions'
					},
					{
						id: 20820,
						name: 'Managed Bare Metal',
						description:
							'Your scalable dedicated cloud, hosted and monitored by OVHcloud, available in just 90 minutes. With the Essentials range, opt for highly available VMware virtualisation, and stay focused on your business.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Bare Metal Cloud', 'Managed Bare Metal'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'ESSENTIALS',
						order: 'https://www.ovhcloud.com/fr/managed-bare-metal/',
						highlight: true,
						featureAvailability: 'managed-bare-metal',
						universe: 'Bare Metal Cloud',
						category: 'Managed Bare Metal'
					},
					{
						id: 20402,
						name: 'SharePoint',
						description:
							'SharePoint lets you create websites where you can store, organise and share information within your organisation. ',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Web Hosting & Domains',
							'Collaborative Solutions',
							'SharePoint'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'MS_SHAREPOINT',
						order: 'https://www.ovh.com/manager/#/web/configuration/microsoft/sharepoint/order',
						featureAvailability: 'sharepoint',
						universe: 'Web Hosting & Domains',
						category: 'Collaborative Solutions'
					},
					{
						id: 20385,
						name: 'Email Pro',
						description:
							'As the most comprehensive and widely-used business email solution on the market, Exchange offers many features — including contact, folder and calendar sharing, and email syncing.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Web Hosting & Domains', 'Email solutions', 'Email Pro'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'EMAIL_PRO',
						order: 'https://www.ovh.com/fr/emails/email-pro/',
						regions: ['EU'],
						featureAvailability: 'email-pro',
						universe: 'Web Hosting & Domains',
						category: 'Email solutions'
					},
					{
						id: 20398,
						name: 'Managed Kubernetes Service',
						description:
							'Orchestrate your containerised applications with a CNCF-certified Kubernetes cluster',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Public Cloud',
							'Containers and orchestration',
							'Managed Kubernetes Service'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'MANAGED_KUBERNETES',
						order: 'https://www.ovhcloud.com/fr/public-cloud/kubernetes',
						featureAvailability: 'kubernetes',
						universe: 'Public Cloud',
						category: 'Containers and orchestration'
					},
					{
						id: 20895,
						name: 'Private Network',
						description:
							'Deploy private networks to implement virtual switches that can hot-connect your project instances in real time, without any service interruptions.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'Private Network'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'PRIVATE_NETWORK',
						order: 'https://www.ovhcloud.com/fr/public-cloud/private-network',
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20425,
						name: 'Visibility Pro',
						description:
							'Get your business on the map, wherever your customers are. Receive alerts, and reply quickly to customer reviews. Save time with an easy-to-use, centralised management interface.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Web Hosting & Domains',
							'Web Hosting options',
							'Visibility Pro'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'VISIBILITY_PRO',
						order: 'https://www.ovh.com/fr/hebergement-web/referencement-local.xml',
						universe: 'Web Hosting & Domains',
						category: 'Web Hosting options'
					},
					{
						id: 20804,
						name: 'Dedicated Servers',
						description:
							'Choose the best infrastructure for your business applications. We offer different ranges of highly efficient dedicated servers, adapted to the most demanding needs of all companies.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Bare Metal Cloud', 'Dedicated Servers'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'DEDICATED_SERVER',
						order: 'https://www.ovhcloud.com/fr/bare-metal/prices/',
						highlight: true,
						featureAvailability: 'dedicated-server:order',
						universe: 'Bare Metal Cloud',
						category: 'Dedicated Servers'
					},
					{
						id: 20839,
						name: 'OVHcloud Connect',
						description:
							'With our OVHcloud Connect hybrid connection solution, you can form a secure, high-performance link between your company network and the OVHcloud vRack.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'OVHcloud Connect'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'OVH_CLOUD_CONNECT',
						order: 'https://www.ovhcloud.com/fr/network-security/ovhcloud-connect/',
						featureAvailability: 'cloud-connect',
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20872,
						name: 'Logs Data Platform',
						description:
							'Index and analyse logs in real time. Receive alerts if anything stops working. Share your data with your employees.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Data Analytics', 'Logs Data Platform'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'ANALYTICS_DATA_PLATFORM',
						order: 'https://www.ovhcloud.com/fr/public-cloud/big-data-hadoop/',
						universe: 'Public Cloud',
						category: 'Data Analytics'
					},
					{
						id: 20449,
						name: 'Compute',
						description:
							'Deploy an option from our range of instances, and harness the flexibility of the cloud to grow in a way that suits your needs.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Public Cloud', 'Compute'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'PCI_INSTANCES',
						order: 'https://www.ovhcloud.com/fr/public-cloud/',
						universe: 'Public Cloud',
						category: 'Compute'
					},
					{
						id: 20455,
						name: 'Domain name',
						description:
							'With more than 800 different extensions out there, you’ll find the right one for you.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Web Hosting & Domains', 'Domain name'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'DOMAIN',
						order: 'https://www.ovh.com/fr/order/webcloud/',
						highlight: true,
						featureAvailability: 'web:domains',
						universe: 'Web Hosting & Domains',
						category: 'Domain name'
					},
					{
						id: 20836,
						name: 'Floating IP',
						description:
							'Assign and move public and flexible IPs between Public Cloud instances and network features (e.g. LBaaS, Gateway).',
						lang: 'en_GB',
						categories: ['Catalogs', 'Network', 'Network Services', 'Floating IP'],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'FLOATING_IP',
						order: 'https://www.ovhcloud.com/fr/public-cloud/floating-ip/',
						featureAvailability: 'additional-ips',
						universe: 'Network',
						category: 'Network Services'
					},
					{
						id: 20399,
						name: 'Managed Private Registry',
						description:
							'Manage a repository for your software building blocks, in the form of Docker images or Helm charts',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Public Cloud',
							'Containers and orchestration',
							'Managed Private Registry'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'MANAGED_PRIVATE_REGISTRY',
						order: 'https://www.ovhcloud.com/fr/public-cloud/managed-private-registry',
						universe: 'Public Cloud',
						category: 'Containers and orchestration'
					},
					{
						id: 20430,
						name: 'Web PaaS Powered by Platform.sh',
						description:
							'A development platform designed for developers and their teams to design, deploy and run web applications.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Web Hosting & Domains',
							'Web PaaS',
							'Web PaaS Powered by Platform.sh'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU'],
						productName: 'WEB_PAAS',
						order: 'https://www.ovh.com/manager/#/web/paas/webpaas/new',
						featureAvailability: 'web-paas',
						universe: 'Web Hosting & Domains',
						category: 'Web PaaS'
					},
					{
						id: 20418,
						name: 'Shared Content Delivery Network (CDN)',
						description:
							'Optimise your website traffic with the Shared CDN option for an optimal user experience',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Web Hosting & Domains',
							'Web Hosting options',
							'Shared Content Delivery Network (CDN)'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'CA'],
						productName: 'SHARED_CDN',
						order: 'https://www.ovh.com/fr/hebergement-web/cdn.xml',
						featureAvailability: 'hosting:shared-cdn',
						universe: 'Web Hosting & Domains',
						category: 'Web Hosting options'
					},
					{
						id: 20414,
						name: 'Hosted Private Cloud powered by VMware',
						description:
							'The Private Cloud is a unique solution on the market, offering the scalability of the cloud with a 100% dedicated hardware infrastructure. Our infrastructure is virtualised using VMware technology, and is completely managed by OVHcloud.',
						lang: 'en_GB',
						categories: [
							'Catalogs',
							'Hosted Private Cloud',
							'Platform',
							'VMware',
							'Hosted Private Cloud powered by VMware'
						],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'PRIVATE_CLOUD',
						order: 'https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/prices/',
						highlight: true,
						featureAvailability: 'dedicated-cloud:order',
						universe: 'Hosted Private Cloud',
						category: 'Platform'
					},
					{
						id: 20817,
						name: 'Virtual Private Servers',
						description:
							'A virtual private server, also referred to as a VPS, is a virtual dedicated server. Unlike web hosting — (also known as shared hosting), where the technical aspects are managed by OVHcloud — you are the administrator of your VPS, and fully manage it.',
						lang: 'en_GB',
						categories: ['Catalogs', 'Bare Metal Cloud', 'Virtual Private Servers'],
						url: 'https://mockup.url.com',
						regionTags: ['EU', 'US', 'CA'],
						productName: 'VPS',
						order: 'https://www.ovh.com/fr/vps/',
						highlight: true,
						featureAvailability: 'vps',
						universe: 'Bare Metal Cloud',
						category: 'Virtual Private Servers'
					}
				]
			}
		}
	};

	return new Response(JSON.stringify(r));
};
