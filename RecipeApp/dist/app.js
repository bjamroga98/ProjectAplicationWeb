var pestoRecipe = /** @class */ (function () {
    function pestoRecipe(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
        
    }
    pestoRecipe.prototype.Element = function () {
        var _this = this;
        var p = document.createElement("p");
        p.innerHTML = this._title;
        p.onclick = function () { return _this.IngredientsList(); };
        p.setAttribute("class", "item");
        return p;
    };
    
    pestoRecipe.prototype.IngredientsList = function () {
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
    return pestoRecipe;
   
}());
var pestoBox = /** @class */ (function () {
    function pestoBox() {
        
        this.updateLocal = function (pesto) {
            localStorage.setItem("pesto", JSON.stringify(pesto));
        };
        document.getElementById("addpesto").addEventListener("click", this.add.bind(this));
        this._pestolist = [];
        this.getLocal();
        this.updateView(true);
    }
    
    pestoBox.prototype.add = function (e) {
        e.preventDefault();
        var titleElem = document.getElementById("title");
        var ingredientsElem = document.getElementById("ingredients");
        var recipe = new pestoRecipe(titleElem.value, ingredientsElem.value);
        this._pestolist.push(recipe);
        this.updateLocal(this._pestolist);
        this.updateView(false, recipe);
        titleElem.value = "";
        ingredientsElem.value = "";
    };
    pestoBox.prototype.getLocal = function () {
        var local = localStorage.getItem("pesto");
        local = JSON.parse(local);
        if (!local) {
            return;
        }
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var recipe = local_1[_i];
            this._pestolist.push(new pestoRecipe(recipe._title, recipe._ingredients));
        }
    };
    pestoBox.prototype.updateView = function (initial, recipe) {
        var table = document.getElementById("recipe");
        if (initial) {
            for (var _i = 0, _a = this._pestolist; _i < _a.length; _i++) {
                var recipe_1 = _a[_i];
                table.appendChild(recipe_1.Element());
            }
        }
        else {
            table.appendChild(recipe.Element());
        }
    };
    return pestoBox;
}());
 new pestoBox();