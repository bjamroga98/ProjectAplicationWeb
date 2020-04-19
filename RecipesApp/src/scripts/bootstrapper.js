var Bootstrapper = /** @class */ (function () {
    function Bootstrapper() {
    }
    Bootstrapper.prototype.loadRecipes = function () {
        var el = document.getElementById('RecipeCategory');
        try {
            var category = this.recipeCategories.items
                //Find selected item by name
                .filter(function (item) { return item.name === el.value; })
                //return the item
                .reduce(function (item) {
                //TODO (CONSTRUCTORS EXERCISE)
                //Change the RecipeCategory code below so that the property values are
                //passed into the constructor rather than set individually.
                var rc = new RecipeCategory({
                    name: el.value,
                    foodGroups: item.foodGroups,
                    description: item.description,
                    examples: item.examples
                });
                return rc;
            });
            this.renderer.renderCategory(category);
        }
        catch (ex) {
            alert(ex.message);
        }
    };
    Bootstrapper.prototype.init = function () {
        var _this = this;
        var categoriesSelect = document.getElementById('RecipeCategory');
        categoriesSelect.onchange = function () { return _this.loadRecipes(); };
        var recipeLoader = new RecipeLoader("/json/recipeTypes.json");
        recipeLoader.load().then(function (recipeData) {
            _this.recipeCategories = recipeData.recipeCategories;
            _this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
        });
    };
    return Bootstrapper;
}());
window.onload = function () {
    var bootstrapper = new Bootstrapper();
    bootstrapper.init();
};
//# sourceMappingURL=bootstrapper.js.map