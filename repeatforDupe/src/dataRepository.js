function loadCustomers() {
	return [
		{ name:"Brian", phone: "999-999-9999"},
		{ name: "Jeremy", phone: "777-777-7777"}
	];
}

export class DataRepository {
	getCustomers() {
		var promise = new Promise((resolve, reject) => {
			if (!this.customers) {
				this.customers = loadCustomers();
			}
			resolve(this.customers);
		});
		return promise;
	}
	
	addCustomer(customer) {
		var promise = new Promise((resolve, reject) =>{
			this.customers.push(customer);
			resolve(customer);
		});
		return promise;
	}
}