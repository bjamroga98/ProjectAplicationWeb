//TODO (INTERFACES EXERCISE)
//1. Add code to make the Example class implement IExample
var Example = /** @class */ (function () {
    function Example(example) {
        this.ingredients = [];
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.text = example.text;
        this.prepTime = example.prepTime;
    }
    return Example;
}());
//# sourceMappingURL=recipeExample.js.map