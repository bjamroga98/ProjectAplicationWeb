import drinkRecipe from "./drink"
class drinkBox {

    _drinklist: drinkRecipe[];

   constructor() {
       document.getElementById("adddrink").addEventListener("click", this.add.bind(this));
       this._drinklist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: drinkRecipe = new drinkRecipe(titleElem.value, ingredientsElem.value);

       this._drinklist.push(recipe);
       this.updateLocal(this._drinklist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("drink");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._drinklist.push(new drinkRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (drink: drinkRecipe[]) : void => {
       localStorage.setItem( "drink", JSON.stringify(drink));
   }

   
    updateView(initial: boolean, recipe?: drinkRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._drinklist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new drinkBox();