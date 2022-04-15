import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileGuard } from './profile-page/profile.guard';
import { RecipeLandingPageComponent } from './recipe-landing-page/recipe-landing-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [ ProfileGuard ] },
  { path: 'recipes', component: RecipeLandingPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
