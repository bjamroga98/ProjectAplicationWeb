import './styles/styles.scss';
class Recipe {
	private _title: string;
    private _ingredients: string;

	public constructor(title: string, ingredients: string) {
		this._title = title;
        this._ingredients = ingredients;
	}

	public toHTML() : HTMLElement {
		let li : HTMLElement = document.createElement("li");
		li.innerHTML = this._title;
        li.onclick = () => this.updateIngredientsList();
		li.setAttribute("class", "list-group-item");
		return li;
	}

	private updateIngredientsList() : void {
		let ingredientList = document.getElementById("ingredient-list");
		let ingredients = this._ingredients.split(",");
		
		ingredientList.innerHTML = "";
		for (let ingredient of ingredients) {
			if(ingredient === "") { continue }; 
			let li = document.createElement("li");
			li.innerHTML = ingredient;
			li.setAttribute("class", "list-group-item");
			ingredientList.appendChild(li);
		}
    }
    
}
class RecipeBox{
	private _list: Recipe[];

	constructor() {
		document.getElementById("add").addEventListener("click",this.addrecipe.bind(this));
		this._list=[];
	}
	private addrecipe(e:Event){

	}
}
new RecipeBox();


