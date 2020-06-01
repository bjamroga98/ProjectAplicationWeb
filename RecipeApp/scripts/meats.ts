import meatRecipe from "./meat"
class meatBox {

    _meatlist: meatRecipe[];

   constructor() {
       document.getElementById("addmeat").addEventListener("click", this.add.bind(this));
       this._meatlist = [];
       this.getLocal();
       this.updateView(true);
   }

    add(e : Event) {
       e.preventDefault();
       let titleElem: any = document.getElementById("title");
       let ingredientsElem: any = document.getElementById("ingredients");
       let recipe: meatRecipe = new meatRecipe(titleElem.value, ingredientsElem.value);

       this._meatlist.push(recipe);
       this.updateLocal(this._meatlist);
       this.updateView(false, recipe);

       titleElem.value = "";
       ingredientsElem.value = "";
       
   }
    getLocal() {
       let local: any = localStorage.getItem("meat");
       local = JSON.parse(local);

       if( !local ) { return; }

       for(let recipe of local){
           this._meatlist.push(new meatRecipe(recipe._title, recipe._ingredients));
       }
   }

    updateLocal = (meat: meatRecipe[]) : void => {
       localStorage.setItem( "meat", JSON.stringify(meat));
   }

   
    updateView(initial: boolean, recipe?: meatRecipe) {
       let table : HTMLElement = document.getElementById("recipe");
       if(initial){
           for(let recipe of this._meatlist)
               table.appendChild(recipe.Element());
       } else {
           table.appendChild(recipe.Element());
       }
   }
}

new meatBox();