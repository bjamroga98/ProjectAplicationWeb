enum AddRecipe {
    NameInput = 'name',
    IngredientInput ='ingredient',
    TextAreaInput = 'textarea',
    PreTime = 'pretime',
    checkboxInput = 'checkbox',
    submitInput='submit'
   
}

interface Recipe{
    name: string;
    label: string;
    type: AddRecipe;
    render(): HTMLElement;
    getvalue(): any;

}

class Cook {
    form: any;
    constructor(){
        this.form = new Form('box');
    }
    createForm(): void{
        let name = new InputRecipe('text','Name Recipe:');
        let ingredient = new InputRecipe('text', 'Ingredient:');
        let text = new TextAreaRecipe('text','Text:');
        let pretime = new InputRecipe('text','PreTime:');
        let types = new CheckboxRecipe('typ','categories:');

        this.form.button = new SubmitButton('submitButton', 'button')
        this.form.fields.push(name);
        this.form.fields.push(ingredient);
        this.form.fields.push(text);
        this.form.fields.push(pretime);
        this.form.fields.push(types);
        this.form.render();
    };
    saveToLocalStorage = (data: object) =>{
        if(this.form) localStorage.setItem(this.form,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }
}
class InputRecipe implements Recipe{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.type = AddRecipe.NameInput;
    }
    render(): HTMLElement{
        const div = document.createElement('div');
        const label = <HTMLLabelElement> document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;

        div.appendChild(label);
        div.appendChild(this.element);

        return div;
    }
    getvalue(): any{
        return this.element.value
    };
    saveToLocalStorage = (data: object) =>{
        if(this.label) localStorage.setItem(this.name,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }

}
class CheckboxRecipe implements Recipe{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.type = AddRecipe.checkboxInput;
    }
    render(): HTMLElement{
        const div = document.createElement('div');
        const label = <HTMLLabelElement> document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;

        div.appendChild(label);
        div.appendChild(this.element);

        return div;
    }
    getvalue(): any{
        return this.element.checked
    };
    saveToLocalStorage = (data: object) =>{
        if(this.label) localStorage.setItem(this.name,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }
}

class TextAreaRecipe implements Recipe{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.type = AddRecipe.NameInput;
    }
    render(): HTMLElement{
        const div = document.createElement('div');
        const label = <HTMLLabelElement> document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;

        div.appendChild(label);
        div.appendChild(this.element);

        return div;
    }
    getvalue(): any{
        return this.element.value
    };
    saveToLocalStorage = (data: object) =>{
        if(this.label) localStorage.setItem(this.name,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }
}

class SubmitButton {
name: string;
type: AddRecipe;
element: HTMLInputElement;

constructor(name: string, label: string){
    this.element = <HTMLInputElement>document.createElement('input');
    this.name=name;
    this.element.name=this.name;
    this.element.type = AddRecipe.submitInput;
}
render(): HTMLElement{
    const div = document.createElement('div');
    div.appendChild(this.element);
    return div;
    
};
saveToLocalStorage = (data: object) =>{
    if(this.name) localStorage.setItem(this.name,JSON.stringify(data));
};
getItemsFromLocalStorage = () =>{
    const items = {...localStorage};
    for (const [key, value] of Object.entries(items)){
        console.log(key, value);
        console.log(JSON.parse(value));
    }
}
}
class Form{
    fields: Recipe[];
    formElement: HTMLFormElement;
    button: SubmitButton;

    constructor(id: string){
        this.fields = new Array();
        this.formElement=<HTMLFormElement>document.getElementById(id);
    }
    render(): void{
        this.fields.forEach(field => this.formElement.appendChild(field.render()))
        this.formElement.appendChild(this.button.render());
        this.formElement.addEventListener('submit',(event)=>{
            event.preventDefault();
            alert(this.getValue())
        });

    }
    getValue(): string{
        let value = '';
        this.fields.forEach(field=>{
            value +=`${field.label}: ${field.getvalue()}\n`
           
        })
        return value;
    }
    
}

new Cook().createForm();