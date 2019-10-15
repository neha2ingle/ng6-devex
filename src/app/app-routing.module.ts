import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevexGridComponent } from './devex-grid/devex-grid.component';

const routes: Routes = [{
  path: 'devex-grid',
  component: DevexGridComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
