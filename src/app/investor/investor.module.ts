import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';
import { InvestmentsComponent } from './investments/investments.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AccountComponent } from './account/account.component';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    InvestorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  declarations: [
    InvestorDashboardComponent,
    ProfileComponent,
    LoanRequestsComponent,
    InvestmentsComponent,
    PaymentsComponent,
    LoanDetailsComponent,
    AccountComponent
  ]
})
export class InvestorModule { }
