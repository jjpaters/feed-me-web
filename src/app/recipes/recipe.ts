export class UpdateRecipe {
    id: string;
    title: string;
    description: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    steps: string[];
    updated: Date;

    constructor() {
        this.ingredients = new Array<string>();
        this.steps = new Array<string>();
    }
}

export class Recipe extends UpdateRecipe {
    userId: string;
}
