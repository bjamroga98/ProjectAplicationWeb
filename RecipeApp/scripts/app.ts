class pestoRecipe {
	private _title: string;
	private _ingredients: string;


	 constructor(title: string, ingredients: string) {
		this._title = title;
		this._ingredients = ingredients;

	}

	 Element() : HTMLElement {
		let ul : HTMLElement = document.createElement("ul");
		ul.innerHTML = this._title;
		ul.onclick = () => this.IngredientsList();
		ul.setAttribute("class", "list-group-item");
		return ul;
	}

		private IngredientsList() : void {
		let ingredientList = document.getElementById("ingredient-list");
		let ingredients = this._ingredients.split(",");
		
		ingredientList.innerHTML = "";
		for (let ingredient of ingredients) {
			if(ingredient === "") { continue }; 
			let ul = document.createElement("ul");
			ul.innerHTML = ingredient;
			ul.setAttribute("class", "list-group-item");
			ingredientList.appendChild(ul);
		}

		
	}
	
}

class pestoBox {

	private _pestolist: pestoRecipe[];

	constructor() {
		document.getElementById("addpesto").addEventListener("click", this.addRecipe.bind(this));
		this._pestolist = [];
		this.getLocal();
		this.updateView(true);
	}

	private addRecipe(e : Event) {
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
	private getLocal() {
		let local: any = localStorage.getItem("pesto");
		local = JSON.parse(local);

		if( !local ) { return; }

		for(let recipe of local){
			this._pestolist.push(new pestoRecipe(recipe._title, recipe._ingredients));
		}
	}

	private updateLocal = (pesto: pestoRecipe[]) : void => {
		localStorage.setItem( "pesto", JSON.stringify(pesto));
	}

	
	private updateView(initial: boolean, recipe?: pestoRecipe) {
		let table : HTMLElement = document.getElementById("recipe-list");
		if(initial){
			for(let recipe of this._pestolist)
				table.appendChild(recipe.Element());
		} else {
			table.appendChild(recipe.Element());
		}
	}
}

let app = new pestoBox();