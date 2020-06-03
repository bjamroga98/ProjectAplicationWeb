import vegeRecipe from "./vege"
import "./style/vege.scss"
class vegeBox {

    _vegelist: vegeRecipe[];

   constructor() {
       document.getElementById("addvege").addEventListener("click", this.add.bind(this));
       this._vegelist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: vegeRecipe = new vegeRecipe(titleElem.value, ingredientsElem.value);

       this._vegelist.push(recipe);
       this.updateLocal(this._vegelist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("vege");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._vegelist.push(new vegeRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (vege: vegeRecipe[]) : void => {
       localStorage.setItem( "vege", JSON.stringify(vege));
   }

   
    updateView(initial: boolean, recipe?: vegeRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._vegelist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new vegeBox();