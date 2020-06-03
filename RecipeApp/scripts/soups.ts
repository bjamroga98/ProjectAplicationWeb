import soupRecipe from "./soup"
import "./style/soup.scss"
class soupBox {

    _souplist: soupRecipe[];

   constructor() {
       document.getElementById("addsoup").addEventListener("click", this.add.bind(this));
       this._souplist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: soupRecipe = new soupRecipe(titleElem.value, ingredientsElem.value);

       this._souplist.push(recipe);
       this.updateLocal(this._souplist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("soup");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._souplist.push(new soupRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (soup: soupRecipe[]) : void => {
       localStorage.setItem( "soup", JSON.stringify(soup));
   }

   
    updateView(initial: boolean, recipe?: soupRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._souplist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new soupBox();