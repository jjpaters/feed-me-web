import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipe';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.scss']
})
export class MyRecipesPageComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe((res: Recipe[]) => {
      this.recipes = res;
    }, (err) => {
      console.log(`MyRecipesPageError: ${err}`);
    });
  }

}
