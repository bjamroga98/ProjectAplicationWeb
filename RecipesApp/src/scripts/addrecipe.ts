class AddRecipe implements IAddRecipe{
    name: string;
    ingredient: string;
    text: string;
    time: string;
    checkbox: string;
    submit: string;

    constructor(name: string, ingredient: string, text: string, time: string, checkbox: string, submit: string){
        this.name = name;
        this.ingredient = ingredient;
        this.text = text;
        this.time = time;
        this.checkbox = checkbox;
        this.submit = submit;
    }
}