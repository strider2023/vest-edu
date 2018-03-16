import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';
import { UsersComponent } from './users/users.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  {
    path: '',
    children: [
      { path: 'loans', component: LoanRequestsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'loan/details/:id', component: LoanDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
