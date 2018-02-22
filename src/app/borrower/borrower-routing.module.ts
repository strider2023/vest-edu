import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoansComponent } from './loans/loans.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';
import { LoansDetailsComponent } from './loans-details/loans-details.component';

const routes: Routes = [
  { path: '', component: BorrowerDashboardComponent },
  {
    path: '',
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'loans', component: LoansComponent },
      { path: 'apply', component: ApplyLoanComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'loan/details/:id', component: LoansDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule { }
