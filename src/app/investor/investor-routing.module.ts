import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';

const routes: Routes = [
  { path: '', component: InvestorDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
