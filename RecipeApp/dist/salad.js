var saladRecipe = /** @class */ (function () {
    function saladRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    saladRecipe.prototype.Element = function () {
        var _this = this;
        var ul = document.createElement("ul");
        ul.innerHTML = this._title;
        ul.onclick = function () { return _this.IngredientsList(); };
        ul.setAttribute("class", "list-group-item");
        return ul;
    };
    
    saladRecipe.prototype.IngredientsList = function () {
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
    return saladRecipe;
   
}());
var saladBox = /** @class */ (function () {
    function saladBox() {
        
        this.updateLocal = function (salad) {
            localStorage.setItem("salad", JSON.stringify(salad));
        };
        document.getElementById("addsalad").addEventListener("click", this.addRecipe.bind(this));
        this._saladlist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    saladBox.prototype.addRecipe = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new saladRecipe(titleElem.value, ingredientsElem.value);
        this._saladlist.push(recipe);
        this.updateLocal(this._saladlist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    saladBox.prototype.getLocal = function () {
        var local = localStorage.getItem("salad");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._saladlist.push(new saladRecipe(recipe._title, recipe._ingredients));
        }
    };
    saladBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe-list");
        if (initial) {
            for (var _i = 0, _a = this._saladlist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return saladBox;
}());
var app = new saladBox();