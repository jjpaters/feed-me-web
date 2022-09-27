export class Recipe {
  recipeId: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  ingredientGroups: IngredientGroup[];
  steps: Step[];
}

export class IngredientGroup {
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