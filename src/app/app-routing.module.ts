import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AdminAuthGuardService as AdminGuard } from './core/services/admin-auth-guard.service';
import { BorrowerAuthGuardService as BorrowerGuard } from './core/services/borrower-auth-guard.service';
import { InvestorAuthGuardService as InvestorGuard } from './core/services/investor-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AdminGuard] },
  { path: 'investor', loadChildren: 'app/investor/investor.module#InvestorModule', canActivate: [InvestorGuard] },
  { path: 'borrower', loadChildren: 'app/borrower/borrower.module#BorrowerModule', canActivate: [BorrowerGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
