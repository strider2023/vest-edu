import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoansComponent } from './loans/loans.component';
import { LoansDetailsComponent } from './loans-details/loans-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountComponent } from './account/account.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BorrowerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  declarations: [
    BorrowerDashboardComponent,
    ProfileComponent,
    LoansComponent,
    LoansDetailsComponent,
    TransactionsComponent,
    AccountComponent,
    ApplyLoanComponent]
})
export class BorrowerModule { }
