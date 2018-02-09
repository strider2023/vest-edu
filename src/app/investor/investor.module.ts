import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    InvestorRoutingModule
  ],
  declarations: [InvestorDashboardComponent]
})
export class InvestorModule { }
