var RecipeLoader = /** @class */ (function () {
    function RecipeLoader(url) {
        this.url = url;
    }
    RecipeLoader.prototype.load = function () {
        var _this = this;
        return $.getJSON(this.url).then(function (data) {
            var recipeData = _this.mapData(data);
            return recipeData;
        });
    };
    RecipeLoader.prototype.mapData = function (data) {
        var _this = this;
        if (data) {
            var categories = data.recipeCategories;
            var recipeCategories_1 = new RecipeCategories();
            var recipeCategoriesSummary_1 = new RecipeCategories();
            categories.forEach(function (category) {
                var recipeCategory = new RecipeCategory({
                    name: category.title,
                    foodGroups: _this.getFoodGroups(category),
                    description: category.details,
                    examples: _this.getExamples(category)
                });
                recipeCategories_1.items.push(recipeCategory);
                var recipeCategorySummary = new RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary_1.items.push(recipeCategorySummary);
            });
            return {
                recipeCategories: recipeCategories_1,
                recipeCategoriesSummary: recipeCategoriesSummary_1
            };
        }
        else {
            return null;
        }
    };
    RecipeLoader.prototype.getFoodGroups = function (category) {
        return category.foodGroups.map(function (foodGroup) {
            var group = new FoodGroup(foodGroup.title);
            return group;
        });
    };
    RecipeLoader.prototype.getExamples = function (category) {
        var _this = this;
        return category.examples.map(function (example) {
            return new Example({
                name: example.name,
                ingredients: _this.getIngredients(example),
                text: example.text,
                prepTime: example.prepTime
            });
        });
    };
    RecipeLoader.prototype.getIngredients = function (example) {
        return example.ingredients.map(function (value) {
            return new Ingredient(value);
        });
    };
    return RecipeLoader;
}());
//# sourceMappingURL=recipeLoader.js.map