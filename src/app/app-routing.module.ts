import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'investor', loadChildren: 'app/customers/investor.module#InvestorModule' },
  { path: 'borrower', loadChildren: 'app/customers/borrower.module#BorrowerModule' },
  { path: 'onboarding', loadChildren: 'app/user-onboarding/user-onboarding.module#UserOnboardingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
