import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBlocksModule } from '../core-blocks/core-blocks.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRouteGuard } from '../core-blocks/guards/protected-route.guard';
import { RecipeService } from './recipe.service';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeSearchPageComponent, canActivate: [ ProtectedRouteGuard ] },
  { path: 'edit-recipes', component: RecipePageComponent, canActivate: [ ProtectedRouteGuard ] },
  { path: 'edit-recipes/:id', component: RecipePageComponent, canActivate: [ ProtectedRouteGuard ] }
];

@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipePageComponent,
    RecipeSearchPageComponent
  ],
  imports: [
    CommonModule,
    CoreBlocksModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
