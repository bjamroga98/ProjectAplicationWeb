var vegeRecipe = /** @class */ (function () {
    function vegeRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    vegeRecipe.prototype.Element = function () {
        var _this = this;
        var ul = document.createElement("ul");
        ul.innerHTML = this._title;
        ul.onclick = function () { return _this.IngredientsList(); };
        ul.setAttribute("class", "list-group-item");
        return ul;
    };
    
    vegeRecipe.prototype.IngredientsList = function () {
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
    return vegeRecipe;
   
}());
var vegeBox = /** @class */ (function () {
    function vegeBox() {
        
        this.updateLocal = function (vege) {
            localStorage.setItem("vege", JSON.stringify(vege));
        };
        document.getElementById("addvege").addEventListener("click", this.addRecipe.bind(this));
        this._vegelist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    vegeBox.prototype.addRecipe = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new vegeRecipe(titleElem.value, ingredientsElem.value);
        this._vegelist.push(recipe);
        this.updateLocal(this._vegelist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    vegeBox.prototype.getLocal = function () {
        var local = localStorage.getItem("vege");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._vegelist.push(new vegeRecipe(recipe._title, recipe._ingredients));
        }
    };
    vegeBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe-list");
        if (initial) {
            for (var _i = 0, _a = this._vegelist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return vegeBox;
}());
var app = new vegeBox();