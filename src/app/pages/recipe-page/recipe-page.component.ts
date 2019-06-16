import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Recipe } from '../../recipes/recipe';
import { RecipeService } from '../../recipes/recipe.service';
import { DeleteRecipeConfirmationComponent } from 'src/app/recipes/delete-recipe-confirmation/delete-recipe-confirmation.component';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.getRecipe(this.route.snapshot.paramMap.get('id'));
  }

  deleteRecipeConfirmation(recipeId: string) {
    this.dialog.open(DeleteRecipeConfirmationComponent).afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.deleteRecipe(recipeId);
      }
    });
  }

  deleteRecipe(recipeId: string) {
    this.recipeService.deleteRecipe(recipeId).subscribe((res: Recipe) => {
      this.router.navigate(['/my-recipes']);
    }, (err) => {
      console.log(`RecipePageError: ${JSON.stringify(err)}`);
    });
  }

  getRecipe(recipeId: string) {
    this.recipeService.getRecipe(recipeId).subscribe((res: Recipe) => {
      this.recipe = res;
    }, (err) => {
      console.log(`RecipePageError: ${JSON.stringify(err)}`);
    });
  }

}
