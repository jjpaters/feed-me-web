import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { AccountPageComponent } from './account-page/account-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SignUpPageComponent,
    LogInPageComponent,
    AccountPageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
