interface PluginMethod {
	plugin: string;
	method: any;
	args: [];
}

export default class PluginManager {
	plugins: { [id: string]: any };

	constructor() {
		this.plugins = {};
	}
	registerPlugin(pluginId: string, pluginInstance: any) {
		if (Object.keys(this.plugins).includes(pluginId)) {
			throw new Error(`Plugin '${pluginId}' is already registered`);
		}
		this.plugins[pluginId] = {
			id: pluginId,
			instance: pluginInstance,
			isAvailable: true
		};
	}
	invokePluginMethod: (p: PluginMethod) => any = ({ plugin, method, args = [] }) => {
		if (!Object.keys(this.plugins).includes(plugin)) {
			throw new Error(`Plugin '${plugin}' is not available`);
		}
		const { instance, isAvailable } = this.plugins[plugin];
		if (!isAvailable) {
			throw new Error(`Plugin '${plugin}' is disabled`);
		}
		const pluginMethod = instance[method];
		if (!pluginMethod) {
			throw new Error(`Method '${method}' not exposed by plugin '${plugin}'`);
		}
		const classPlugin = pluginMethod.bind(instance);
		return Promise.resolve(classPlugin(...args));
	};

	setPluginAvailability(plugin: string, available: boolean) {
		const pluginEntry = this.plugins[plugin];
		if (!pluginEntry) {
			throw new Error(`Plugin '${plugin}' is not registered`);
		}
		pluginEntry.isAvailable = available;
	}
	getPlugin(pluginId: string) {
		const plugin = this.plugins[pluginId];
		return plugin ? plugin.instance : null;
	}
}
