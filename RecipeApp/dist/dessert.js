var dessertRecipe = /** @class */ (function () {
    function dessertRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    dessertRecipe.prototype.Element = function () {
        var _this = this;
        var p = document.createElement("p");
        p.innerHTML = this._title;
        p.onclick = function () { return _this.IngredientsList(); };
        p.setAttribute("class", "item");
        return p;
    };
    
    dessertRecipe.prototype.IngredientsList = function () {
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
    return dessertRecipe;
   
}());
var dessertBox = /** @class */ (function () {
    function dessertBox() {
        
        this.updateLocal = function (dessert) {
            localStorage.setItem("dessert", JSON.stringify(dessert));
        };
        document.getElementById("adddessert").addEventListener("click", this.add.bind(this));
        this._dessertlist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    dessertBox.prototype.add = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new dessertRecipe(titleElem.value, ingredientsElem.value);
        this._dessertlist.push(recipe);
        this.updateLocal(this._dessertlist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    dessertBox.prototype.getLocal = function () {
        var local = localStorage.getItem("dessert");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._dessertlist.push(new dessertRecipe(recipe._title, recipe._ingredients));
        }
    };
    dessertBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe-list");
        if (initial) {
            for (var _i = 0, _a = this._dessertlist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return dessertBox;
}());
 new dessertBox();