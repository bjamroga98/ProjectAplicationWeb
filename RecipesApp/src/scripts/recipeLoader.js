class RecipeLoader {
    constructor(url) {
        this.url = url;
    }
    load() {
        return $.getJSON(this.url).then((data) => {
            var recipeData = this.mapData(data);
            return recipeData;
        });
    }
    mapData(data) {
        if (data) {
            let categories = data.recipeCategories;
            let recipeCategories = new RecipeCategories();
            let recipeCategoriesSummary = new RecipeCategories();
            categories.forEach((category) => {
                let recipeCategory = new RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });
                recipeCategories.items.push(recipeCategory);
                let recipeCategorySummary = new RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });
            return {
                recipeCategories: recipeCategories,
                recipeCategoriesSummary: recipeCategoriesSummary
            };
        }
        else {
            return null;
        }
    }
    getFoodGroups(category) {
        return category.foodGroups.map((foodGroup) => {
            let group = new FoodGroup(foodGroup.title);
            return group;
        });
    }
    getExamples(category) {
        return category.examples.map((example) => {
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                text: example.text,
                prepTime: example.prepTime
            });
        });
    }
    getIngredients(example) {
        return example.ingredients.map((value) => {
            return new Ingredient(value);
        });
    }
}
//# sourceMappingURL=recipeLoader.js.map