"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/styles.scss");
class Recipe {
    constructor(title, ingredients) {
        this._title = title;
        this._ingredients = ingredients;
    }
    toHTML() {
        let li = document.createElement("li");
        li.innerHTML = this._title;
        li.onclick = () => this.updateIngredientsList();
        li.setAttribute("class", "list-group-item");
        return li;
    }
    updateIngredientsList() {
        let ingredientList = document.getElementById("ingredient-list");
        let ingredients = this._ingredients.split(",");
        ingredientList.innerHTML = "";
        for (let ingredient of ingredients) {
            if (ingredient === "") {
                continue;
            }
            ;
            let li = document.createElement("li");
            li.innerHTML = ingredient;
            li.setAttribute("class", "list-group-item");
            ingredientList.appendChild(li);
        }
    }
}
class RecipeBox {
    constructor() {
        document.getElementById("add").addEventListener("click", this.addRecipe.bind(this));
        this._list = [];
    }
    addRecipe(e) {
    }
}
//# sourceMappingURL=addrecipe.js.map