import {inject} from "aurelia-framework";
import {DataRepository} from 'dataRepository';

@inject(DataRepository)
export class CustomerList {
	constructor(dataRepository) {
		this.dataRepository = dataRepository;
	}
	
	activate() {
		return this.dataRepository.getCustomers().then(customers => {
			this.customers = customers;
		});
	}
}