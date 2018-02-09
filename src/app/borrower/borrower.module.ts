import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BorrowerRoutingModule
  ],
  declarations: [BorrowerDashboardComponent]
})
export class BorrowerModule { }
