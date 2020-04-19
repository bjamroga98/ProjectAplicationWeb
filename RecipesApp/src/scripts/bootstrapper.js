var Bootstrapper = /** @class */ (function () {
    function Bootstrapper() {
    }
    Bootstrapper.prototype.loadRecipes = function () {
        var el = document.getElementById('RecipeCategory');
        try {
            var category = this.recipeCategories.items
                .filter(function (item) { return item.name === el.value; })
                .reduce(function (item) {
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