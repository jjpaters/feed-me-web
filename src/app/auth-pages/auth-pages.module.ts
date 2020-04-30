import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from './account-page/account-page.component';
import { AccountPageGuard } from './account-page/account-page.guard';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { SignUpConfirmPageComponent } from './sign-up-confirm-page/sign-up-confirm-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';

const routes: Routes = [
  { path: 'account', component: AccountPageComponent, canActivate: [ AccountPageGuard ] },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup/:username', component: SignUpConfirmPageComponent },
  { path: 'signup', component: SignUpPageComponent }
];

@NgModule({
  declarations: [
    SignUpPageComponent,
    LogInPageComponent,
    AccountPageComponent,
    ForgotPasswordPageComponent,
    SignUpConfirmPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class AuthPagesModule { }
