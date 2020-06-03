import saladRecipe from "./salad"
import "./style/salad.scss"
class saladBox {

    _saladlist: saladRecipe[];

   constructor() {
       document.getElementById("addsalad").addEventListener("click", this.add.bind(this));
       this._saladlist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: saladRecipe = new saladRecipe(titleElem.value, ingredientsElem.value);

       this._saladlist.push(recipe);
       this.updateLocal(this._saladlist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("salad");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._saladlist.push(new saladRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (salad: saladRecipe[]) : void => {
       localStorage.setItem( "salad", JSON.stringify(salad));
   }

   
    updateView(initial: boolean, recipe?: saladRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._saladlist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new saladBox();