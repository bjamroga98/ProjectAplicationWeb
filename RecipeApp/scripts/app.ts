export default class pestoRecipe {
	 _title: string;
	 _ingredients: string;


	 constructor(title: string, ingredients: string) {
		this._title = title;
		this._ingredients = ingredients;

	}

	 Element() : HTMLElement {
		let p : HTMLElement = document.createElement("p");
		p.innerHTML = this._title;
		p.onclick = () => this.IngredientsList();
		p.setAttribute("class", "item");
		return p;
	}

		 IngredientsList() : void {
		let ingredientList = document.getElementById("ingredient");
		let ingredients = this._ingredients.split(",");
		
		ingredientList.innerHTML = "";
		for (let ingredient of ingredients) {
			if(ingredient === "") { continue }; 
			let p = document.createElement("p");
			p.innerHTML = ingredient;
			p.setAttribute("class", "item");
			ingredientList.appendChild(p);
		}

		
	}
	
}

