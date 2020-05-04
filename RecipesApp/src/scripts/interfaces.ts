interface IBaseRecipeCategory {
  name: string;
  foodGroups: FoodGroup[];
}

interface IRecipeCategory extends IBaseRecipeCategory {
  description: string;
  examples: IExample[];
}

interface IFoodGroup {
    name: string;
}

interface IExample {
    name: string;
    ingredients: Ingredient[];
    text: string;
    prepTime: string; 
}

interface IIngredient {
    name: string;
}

interface IRecipeData {
  recipeCategories?: RecipeCategories<RecipeCategory>;
  recipeCategoriesSummary?: RecipeCategories<IRecipeCategorySummary>;
}

interface IRecipeCategorySummary {
    text: string;
    title: string;
}

