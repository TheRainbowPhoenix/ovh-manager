import { environment as environmentStore, type Environment } from '$lib/core/environment';
import type { MessageListener } from '../messageBus';

export function environment(environment: Environment) {
	const listeners: MessageListener[] = [];
	const triggerListeners = (...params: any[]) => {
		listeners.forEach((listener) => {
			// @ts-ignore
			listener.bind(null)(...params);
		});
	};
	environmentStore.set(environment);
	return {
		getEnvironment: () => environment,
		setUniverse: (universe: string) => {
			environment.setUniverse(universe);
			environmentStore.set(environment);
			triggerListeners(environment.getUniverse());
		},
		setApplication: (applicationId: string) => {
			environment.setApplicationName(applicationId);
			environment.setUniverseFromApplicationId(applicationId);
			environmentStore.set(environment);
			triggerListeners(environment.getUniverse());
		},
		onUniverseChange: (callback: MessageListener) => {
			listeners.push(callback);
		}
	};
}
export default environment;
