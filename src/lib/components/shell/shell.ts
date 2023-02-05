import { fetchConfiguration } from '$lib/core/config';
import { DirectClientMessageBus } from './messageBus';
import type IFrameMessageBus from './messageBus';
import PluginManager from './pluginManager';
import environmentPlugin from './plugin/environment';

export const ShellMessageType = {
	PLUGIN_INVOCATION: 'plugin-invocation',
	PLUGIN_RESULT: 'plugin-result',
	EVENT: 'event'
};

export default class Shell {
	pluginManager: PluginManager;
	pluginEventHandler: any;
	messageBus: IFrameMessageBus | DirectClientMessageBus | null;

	constructor() {
		this.pluginManager = new PluginManager();
		this.pluginEventHandler = null;
		this.messageBus = null;
	}
	setMessageBus(bus: IFrameMessageBus | DirectClientMessageBus) {
		if (this.messageBus) {
			this.messageBus.cleanup();
		}
		this.messageBus = bus;
		this.messageBus &&
			this.messageBus.onReceive((data) => {
				if (data.type === ShellMessageType.PLUGIN_INVOCATION) {
					this.handlePluginMessage(data.message);
				}
			});
	}
	getPluginManager() {
		return this.pluginManager;
	}
	getPlugin(pluginId: string) {
		return this.getPluginManager().getPlugin(pluginId);
	}
	registerPlugin(pluginId: string, pluginApi: any) {
		return this.getPluginManager().registerPlugin(pluginId, pluginApi);
	}
	setPluginAvailability(pluginId: string, availability: boolean) {
		return this.getPluginManager().setPluginAvailability(pluginId, availability);
	}
	emitEvent(eventId: boolean, data: any) {
		if (this.messageBus) {
			this.messageBus.send({
				type: ShellMessageType.EVENT,
				message: {
					eventId,
					data
				}
			});
		}
	}
	handlePluginMessage(data: any) {
		const onError = (error: Error) =>
			this.messageBus &&
			this.messageBus.send({
				type: ShellMessageType.PLUGIN_RESULT,
				message: {
					uid: data.uid,
					error
				}
			});
		const onSuccess = (success: any) =>
			this.messageBus &&
			this.messageBus.send({
				type: ShellMessageType.PLUGIN_RESULT,
				message: {
					uid: data.uid,
					success
				}
			});
		this.pluginManager.invokePluginMethod(data).then(onSuccess).catch(onError);
	}
}

export function initShell() {
	return fetchConfiguration('shell').then((environment) => {
		const shell = new Shell();

		shell.setMessageBus(new DirectClientMessageBus());

		shell.getPluginManager().registerPlugin('environment', environmentPlugin(environment));

		return shell;
	});
}
