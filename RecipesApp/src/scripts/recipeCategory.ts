class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    description: string;
    examples: IExample[];
    constructor(recipeCategory: RecipeCategory) {
      super(recipeCategory.name, recipeCategory.foodGroups);
      this.description = recipeCategory.description;
      this.examples = recipeCategory.examples;
    }


} 