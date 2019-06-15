import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'callback', component: AuthPageComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
