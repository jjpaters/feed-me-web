import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'profile', component: ProfilePageComponent, canActivate: [ AuthGuard ] },
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
