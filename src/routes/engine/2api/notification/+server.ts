import { error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

interface GetRequest {
	url: URL;
}

let notifs = [
	{
		id: 'NEW_HELP_CENTER_BETA',
		date: '2023-02-04',
		data: {},
		description:
			'<p>Explore the new beta version of the <a href="https://help-beta.ovhcloud.com/csm" target="_blank">Help</a> Centre.</p><p>Share your feedback by clicking on the ‘Your opinion’ button in the bottom-right corner of this homepage.</p>',
		level: 'info',
		status: 'delivered',
		subject: 'New Help Centre - Beta version'
	},
	{
		id: 'GLOBAL_COMMUNICATION_DPA',
		date: '2023-02-04',
		data: {},
		description:
			'The OVHcloud “Data Processing Agreement” is evolving. <a href="https://www.ovh.ie/personal-data-protection/" target="_blank">More information</a>',
		level: 'info',
		status: 'delivered',
		subject: 'Data Processing Agreement'
	},
	{
		id: 'GLOBAL_COMMUNICATION_PHISHING',
		date: '2023-02-04',
		data: {},
		description:
			'Fraudulent emails circulate and direct to scam websites claiming to be OVHcloud. <a href="https://docs.ovh.com/us/en/customer/scams-fraud-phishing" target="_blank">Find out more</a>',
		level: 'error',
		status: 'delivered',
		subject: 'General information'
	}
];

export const GET: (r: GetRequest) => Response = ({ url }) => {
	const r = notifs;

	return new Response(JSON.stringify(r));
};

interface PostRequest extends RequestEvent {}

export const POST: (p: PostRequest) => Promise<Response> = async ({
	cookies,
	request,
	route,
	url,
	setHeaders
}) => {
	let req = await request.json();
	// console.log(p);

	if (req && req?.acknowledged && Array.isArray(req?.acknowledged)) {
		req?.acknowledged.map((id: string) => {
			notifs.map((n) => {
				if (n.id === id) {
					n.status = 'acknowledged';
				}
			});
		});
	}

	if (req && req?.delivered && Array.isArray(req?.delivered)) {
		req?.delivered.map((id: string) => {
			notifs.map((n) => {
				if (n.id === id) {
					n.status = 'delivered';
				}
			});
		});
	}

	return new Response(JSON.stringify(notifs));
};
