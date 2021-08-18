import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from './account-page/account-page.component';
import { AccountPageGuard } from './account-page/account-page.guard';

const routes: Routes = [
  { path: 'account', component: AccountPageComponent, canActivate: [ AccountPageGuard ] }
];

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ]
})
export class AuthPagesModule { }
