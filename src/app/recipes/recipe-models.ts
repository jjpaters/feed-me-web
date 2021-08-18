export class Recipe {
  recipeId: string;
  title: string;
  description: string;
  category: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  ingredients: Ingredient[];
  steps: Step[];
}

export class Ingredient {
  ingredientId: number;
  text: string;
  recipeId: number;
}

export class Step {
  stepId: number;
  orderNumber: number;
  text: string;
  recipeId: number;
}
