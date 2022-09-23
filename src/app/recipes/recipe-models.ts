export class Recipe {
  recipeId: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  ingredientGroups: IngredientGroups[];
  steps: Step[];
}

export class IngredientGroups {
  ingredientGroupName: string;
  ingredients: Ingredient[];
}

export class Ingredient {
  text: string;
}

export class Step {
  orderNumber: number;
  text: string;
}

export interface RecipeSummary {
  name: string;
  description?: string;
  imageUri: string;
  url?: string;
}