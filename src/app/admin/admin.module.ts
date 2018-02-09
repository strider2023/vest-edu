import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { LoanRequestsComponent } from './loan-requests/loan-requests.component';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [AdminDashboardComponent, LoanDetailsComponent, SearchComponent, UsersComponent, LoanRequestsComponent]
})
export class AdminModule { }
