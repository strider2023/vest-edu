import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';
import { InvestmentsComponent } from './investments/investments.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  { path: '', component: InvestorDashboardComponent },
  {
    path: '',
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'loans', component: LoanRequestsComponent },
      { path: 'investment', component: InvestmentsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'account', component: AccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
