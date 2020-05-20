class dessertRecipe {
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

class dessertBox {

	private _dessertlist: dessertRecipe[];

	constructor() {
		document.getElementById("adddessert").addEventListener("click", this.addRecipe.bind(this));
		this._dessertlist = [];
		this.getLocal();
		this.updateView(true);
	}

	private addRecipe(e : Event) {
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
	private getLocal() {
		let local: any = localStorage.getItem("dessert");
		local = JSON.parse(local);

		if( !local ) { return; }

		for(let recipe of local){
			this._dessertlist.push(new dessertRecipe(recipe._title, recipe._ingredients));
		}
	}

	private updateLocal = (dessert: dessertRecipe[]) : void => {
		localStorage.setItem( "dessert", JSON.stringify(dessert));
	}

	
	private updateView(initial: boolean, recipe?: dessertRecipe) {
		let table : HTMLElement = document.getElementById("recipe-list");
		if(initial){
			for(let recipe of this._dessertlist)
				table.appendChild(recipe.Element());
		} else {
			table.appendChild(recipe.Element());
		}
	}
}

let app = new dessertBox();