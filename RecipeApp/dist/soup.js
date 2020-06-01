var soupRecipe = /** @class */ (function () {
    function soupRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    soupRecipe.prototype.Element = function () {
        var _this = this;
        var p = document.createElement("p");
        p.innerHTML = this._title;
        p.onclick = function () { return _this.IngredientsList(); };
        p.setAttribute("class", "item");
        return p;
    };
    
    soupRecipe.prototype.IngredientsList = function () {
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
    return soupRecipe;
   
}());
var soupBox = /** @class */ (function () {
    function soupBox() {
        
        this.updateLocal = function (soup) {
            localStorage.setItem("soup", JSON.stringify(soup));
        };
        document.getElementById("addsoup").addEventListener("click", this.add.bind(this));
        this._souplist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    soupBox.prototype.add = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new soupRecipe(titleElem.value, ingredientsElem.value);
        this._souplist.push(recipe);
        this.updateLocal(this._souplist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    soupBox.prototype.getLocal = function () {
        var local = localStorage.getItem("soup");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._souplist.push(new soupRecipe(recipe._title, recipe._ingredients));
        }
    };
    soupBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe");
        if (initial) {
            for (var _i = 0, _a = this._souplist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return soupBox;
}());
 new soupBox();