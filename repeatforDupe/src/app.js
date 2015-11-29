export class App {
	configureRouter(config, router) {
		config.map([
			{route: ['', 'customers'], moduleId: 'customerList', name: 'customers'},
			{route: 'add', moduleId: 'addCustomer'}
		]);
	}
}