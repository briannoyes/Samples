export class App {
	configureRouter(config, router) {
		config.map([
			{route: '', moduleId: 'hello'}
		]);
	}
}