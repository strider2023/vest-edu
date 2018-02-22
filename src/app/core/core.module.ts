import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SideNavComponent } from './side-nav/side-nav.component';

import { AuthService } from './services/auth.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { BorrowerAuthGuardService } from './services/borrower-auth-guard.service';
import { InvestorAuthGuardService } from './services/investor-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [SideNavComponent],
  providers: [AuthService, AdminAuthGuardService, BorrowerAuthGuardService, InvestorAuthGuardService]
})
export class CoreModule { }
