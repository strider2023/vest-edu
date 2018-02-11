import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';

const routes: Routes = [
  { path: '', component: BorrowerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule { }
