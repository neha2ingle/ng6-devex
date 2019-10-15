import { Injectable } from '@angular/core';
import * as faker from "faker";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    getCustomers() {
        
        const customers: Customer[] = [];

        for (let idx = 0; idx < 1000 * 10; idx++) {
            const company = faker.company.companyName();
            customers.push({
                ID: idx,
                Address: faker.address.streetAddress(),
                City: faker.address.city(),
                CompanyName: faker.company.companyName(),
                State: faker.address.state(),
                Zipcode: faker.address.zipCode(),
                Fax: faker.phone.phoneNumber(),
                Phone: faker.phone.phoneNumber(),
                Website: `${company}.com`,
            });
            
        }

        return customers;
    }
}
export class Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: string;
    Phone: string;
    Fax: string;
    Website: string;
}
