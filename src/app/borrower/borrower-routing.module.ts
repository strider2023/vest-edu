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
  { path: 'borrower/profile', component: ProfileComponent },
  { path: 'borrower/loans', component: LoansComponent },
  { path: 'borrower/apply', component: ApplyLoanComponent },
  { path: 'borrower/transactions', component: TransactionsComponent },
  { path: 'borrower/account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule { }
