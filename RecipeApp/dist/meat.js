var meatRecipe = /** @class */ (function () {
    function meatRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    meatRecipe.prototype.Element = function () {
        var _this = this;
        var ul = document.createElement("ul");
        ul.innerHTML = this._title;
        ul.onclick = function () { return _this.IngredientsList(); };
        ul.setAttribute("class", "list-group-item");
        return ul;
    };
    
    meatRecipe.prototype.IngredientsList = function () {
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
    return meatRecipe;
   
}());
var meatBox = /** @class */ (function () {
    function meatBox() {
        
        this.updateLocal = function (meat) {
            localStorage.setItem("meat", JSON.stringify(meat));
        };
        document.getElementById("addmeat").addEventListener("click", this.addRecipe.bind(this));
        this._meatlist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    meatBox.prototype.addRecipe = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new meatRecipe(titleElem.value, ingredientsElem.value);
        this._meatlist.push(recipe);
        this.updateLocal(this._meatlist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    meatBox.prototype.getLocal = function () {
        var local = localStorage.getItem("meat");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._meatlist.push(new meatRecipe(recipe._title, recipe._ingredients));
        }
    };
    meatBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe-list");
        if (initial) {
            for (var _i = 0, _a = this._meatlist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return meatBox;
}());
var app = new meatBox();