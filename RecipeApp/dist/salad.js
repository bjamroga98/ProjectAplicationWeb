var saladRecipe = /** @class */ (function () {
    function saladRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    saladRecipe.prototype.Element = function () {
        var _this = this;
        var p = document.createElement("ul");
        p.innerHTML = this._title;
        p.onclick = function () { return _this.IngredientsList(); };
        p.setAttribute("class", "item");
        return p;
    };
    
    saladRecipe.prototype.IngredientsList = function () {
        var ingredientList = document.getElementById("ingredient");
        var ingredients = this._ingredients.split(",");
        ingredientList.innerHTML = "";
        for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
            var ingredient = ingredients_1[_i];
            if (ingredient === "") {
                continue;
            }
            ;
            var p = document.createElement("p");
            p.innerHTML = ingredient;
            p.setAttribute("class", "item");
            ingredientList.appendChild(p);
        }
    };
    return saladRecipe;
   
}());
var saladBox = /** @class */ (function () {
    function saladBox() {
        
        this.updateLocal = function (salad) {
            localStorage.setItem("salad", JSON.stringify(salad));
        };
        document.getElementById("addsalad").addEventListener("click", this.add.bind(this));
        this._saladlist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    saladBox.prototype.add = function (e) {
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
        var table = document.getElementById("recipe");
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
 new saladBox();