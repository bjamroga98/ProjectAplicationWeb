import pestoRecipe from "./app"
class pestoBox {

    _pestolist: pestoRecipe[];

   constructor() {
       document.getElementById("addpesto").addEventListener("click", this.add.bind(this));
       this._pestolist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: pestoRecipe = new pestoRecipe(titleElem.value, ingredientsElem.value);

       this._pestolist.push(recipe);
       this.updateLocal(this._pestolist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("pesto");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._pestolist.push(new pestoRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (pesto: pestoRecipe[]) : void => {
       localStorage.setItem( "pesto", JSON.stringify(pesto));
   }

   
    updateView(initial: boolean, recipe?: pestoRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._pestolist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new pestoBox();