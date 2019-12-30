import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AccountPageGuard } from './pages/account-page/account-page.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'account', component: AccountPageComponent, canActivate: [ AccountPageGuard ] },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup', component: SignUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
