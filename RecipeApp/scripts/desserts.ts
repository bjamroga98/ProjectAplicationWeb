import dessertRecipe from "./dessert"
class dessertBox {

    _dessertlist: dessertRecipe[];

   constructor() {
       document.getElementById("adddessert").addEventListener("click", this.add.bind(this));
       this._dessertlist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: dessertRecipe = new dessertRecipe(titleElem.value, ingredientsElem.value);

       this._dessertlist.push(recipe);
       this.updateLocal(this._dessertlist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
   getLocal() {
       let local: any = localStorage.getItem("dessert");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._dessertlist.push(new dessertRecipe(recipe._title, recipe._ingredients));
       }
   }

   updateLocal = (dessert: dessertRecipe[]) : void => {
       localStorage.setItem( "dessert", JSON.stringify(dessert));
   }

   
   updateView(initial: boolean, recipe?: dessertRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._dessertlist)
           table.appendChild(recipe.Element());
       } else {
        table.appendChild(recipe.Element());
       }
   }
}

new dessertBox();