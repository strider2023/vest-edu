import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    BorrowerRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [BorrowerDashboardComponent]
})
export class BorrowerModule { }
