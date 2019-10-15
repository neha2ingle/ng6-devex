import { Component, OnInit } from '@angular/core';
import { DataService, Customer } from '../data.service';

@Component({
  selector: 'ng6-devex-grid',
  templateUrl: './devex-grid.component.html',
  styleUrls: ['./devex-grid.component.scss']
})
export class DevexGridComponent implements OnInit {

  customers: Customer[];

    constructor(service: DataService) {
        this.customers =  service.getCustomers();
    }
  ngOnInit() {
  }

}
