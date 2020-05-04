class RecipeCategory extends BaseRecipeCategory {
    constructor(recipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
}
//# sourceMappingURL=recipeCategory.js.map