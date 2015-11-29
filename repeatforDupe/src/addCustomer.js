import {inject} from "aurelia-framework";
import {DataRepository} from 'dataRepository';

@inject(DataRepository)
export class AddCustomer {
	constructor(dataRepository) {
		this.dataRepository = dataRepository;
		this.customer = {};
	}
	
	activate(params, routeConfig, navigationInstruction) {
		this.router = navigationInstruction.router;
	}
	
	save() {
		this.dataRepository.addCustomer(this.customer).then(customer=> {
			this.router.navigateToRoute('customers');
		});
	}
}