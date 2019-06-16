export class UpdateRecipe {
    id: string;
    title: string;
    description: string;
    updated: Date;
}

export class Recipe extends UpdateRecipe {
    userId: string;
}
