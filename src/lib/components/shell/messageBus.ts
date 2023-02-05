const IFRAME_MESSAGE_TYPE = 'ovh-shell-iframe-message';

export interface MessageListener {
	(data: any): any;
}

export interface MessagePeer {
	listeners: MessageListener[];
}

export class DirectClientMessageBus {
	listeners: MessageListener[];
	peers: MessagePeer[];

	constructor() {
		this.listeners = [];
		this.peers = [];
	}
	addPeer(peer: MessagePeer) {
		this.peers.push(peer);
	}
	send(data: any) {
		this.peers.forEach((peer) => {
			peer.listeners.forEach((listener: MessageListener) => {
				listener(data);
			});
		});
	}
	onReceive(callback: MessageListener) {
		this.listeners.push(callback);
	}
	cleanup() {
		this.listeners = [];
		this.peers = [];
	}
}

export default class IFrameMessageBus {
	iframe: HTMLIFrameElement | null;
	listeners: MessageListener[];
	onMessage: MessageListener;

	constructor(iframe = null) {
		this.iframe = iframe;
		this.listeners = [];
		this.onMessage = (event) => {
			if (event.origin !== window.location.origin) {
				return;
			}
			const { data } = event;
			if (data.type === IFRAME_MESSAGE_TYPE) {
				this.listeners.forEach((listener) => {
					listener(data.message);
				});
			}
		};
		window.addEventListener('message', this.onMessage);
	}
	send(message: any) {
		if (this.iframe && this.iframe.contentWindow) {
			this.iframe.contentWindow.postMessage(
				{
					type: IFRAME_MESSAGE_TYPE,
					message
				},
				window.location.origin
			);
		} else {
			window.parent.postMessage(
				{
					type: IFRAME_MESSAGE_TYPE,
					message
				},
				window.location.origin
			);
		}
	}
	onReceive(callback: MessageListener) {
		this.listeners.push(callback);
	}
	cleanup() {
		window.removeEventListener('message', this.onMessage);
		this.listeners = [];
	}
}
