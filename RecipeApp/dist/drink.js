var drinkRecipe = /** @class */ (function () {
    function drinkRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    drinkRecipe.prototype.Element = function () {
        var _this = this;
        var ul = document.createElement("ul");
        ul.innerHTML = this._title;
        ul.onclick = function () { return _this.IngredientsList(); };
        ul.setAttribute("class", "list-group-item");
        return ul;
    };
    
    drinkRecipe.prototype.IngredientsList = function () {
        var ingredientList = document.getElementById("ingredient-list");
        var ingredients = this._ingredients.split(",");
        ingredientList.innerHTML = "";
        for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
            var ingredient = ingredients_1[_i];
            if (ingredient === "") {
                continue;
            }
            ;
            var ul = document.createElement("ul");
            ul.innerHTML = ingredient;
            ul.setAttribute("class", "list-group-item");
            ingredientList.appendChild(ul);
        }
    };
    return drinkRecipe;
   
}());
var drinkBox = /** @class */ (function () {
    function drinkBox() {
        
        this.updateLocal = function (drink) {
            localStorage.setItem("drink", JSON.stringify(drink));
        };
        document.getElementById("adddrink").addEventListener("click", this.addRecipe.bind(this));
        this._drinklist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    drinkBox.prototype.addRecipe = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new drinkRecipe(titleElem.value, ingredientsElem.value);
        this._drinklist.push(recipe);
        this.updateLocal(this._drinklist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    drinkBox.prototype.getLocal = function () {
        var local = localStorage.getItem("drink");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._drinklist.push(new drinkRecipe(recipe._title, recipe._ingredients));
        }
    };
    drinkBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe-list");
        if (initial) {
            for (var _i = 0, _a = this._drinklist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return drinkBox;
}());
var app = new drinkBox();