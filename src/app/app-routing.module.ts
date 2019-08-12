import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyRecipesPageComponent } from './pages/my-recipes-page/my-recipes-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'callback', component: AuthPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'my-recipes', component: MyRecipesPageComponent, canActivate: [AuthGuard] },
  { path: 'recipes/:id', component: RecipePageComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: CreateRecipePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
