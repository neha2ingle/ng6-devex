import { Component, OnInit } from '@angular/core';
import { DataService, Customer } from '../data.service';
import DevExpress from 'devextreme/bundles/dx.all';

@Component({
  selector: 'ng6-devex-grid',
  templateUrl: './devex-grid.component.html',
  styleUrls: ['./devex-grid.component.scss']
})
export class DevexGridComponent implements OnInit {

  customers: Customer[];
  gridColumns: Array<DevExpress.ui.dxDataGridColumn | string>

  constructor(private service: DataService) {

  }
  ngOnInit() {
    this.customers = this.service.getCustomers();
    this.gridColumns = [
      {
        caption: 'Company Name',
        dataField: 'CompanyName',
        width: 200
      },
      {
        caption: 'My City',
        dataField: 'City',
        width: 200
      },
      {
        caption: 'My State',
        dataField: 'State',
        width: 200
      },
      {
        caption: 'My Phone',
        dataField: 'Phone',
        width: 200
      },
      {
        caption: 'My Fax',
        dataField: 'Fax',
        width: 200
      }
    ];
  }

}
