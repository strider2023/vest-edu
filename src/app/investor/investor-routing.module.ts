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
  { path: 'investor/profile', component: ProfileComponent },
  { path: 'investor/loans', component: LoanRequestsComponent },
  { path: 'investor/investment', component: InvestmentsComponent },
  { path: 'investor/payments', component: PaymentsComponent },
  { path: 'investor/account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
