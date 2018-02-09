import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOnboardingRoutingModule } from './user-onboarding-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UserOnboardingRoutingModule
  ],
  declarations: [UserDetailsComponent]
})
export class UserOnboardingModule { }
