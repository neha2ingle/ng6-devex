import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from "devextreme-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevexGridComponent } from './devex-grid/devex-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    DevexGridComponent
  ],
  imports: [
    BrowserModule,

    DxDataGridModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
