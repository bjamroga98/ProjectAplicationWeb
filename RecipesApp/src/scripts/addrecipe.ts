enum AddRecipe {
    nameInput = 'name',
    ingredientInput ='ingredient',
    textAreaInput = 'textarea',
    preTime = 'pretime',
    checkboxInput = 'checkbox',
    submitInput='submit'
   
}

interface Field{
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
        let name = new InputField('textfieldname','Name Recipe:');
        let ingredient = new InputField('textfieldingredient', 'Ingredient:');
        let text = new TextAreaField('text','Text:');
        let pretime = new InputField('textfieldpretime','PreTime:');
        let checkbox = new CheckboxField('checkboxfield','categories:');

        this.form.button = new SubmitButton('submitButton', 'button')
        this.form.fields.push(name);
        this.form.fields.push(ingredient);
        this.form.fields.push(text);
        this.form.fields.push(pretime);
        this.form.fields.push(checkbox);
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
class InputField implements Field{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string){
        this.container = <HTMLElement>document.createElement('div');
        this.element = <HTMLInputElement>document.createElement('input');
        this.labelelement = <HTMLLabelElement>document.createElement('label');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.nameInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render(): HTMLElement{
        return this.container;
    }
    getvalue(): any{
        return this.element.value
    };
    saveToLocalStorage = (data: object) =>{
        if(this.container) localStorage.setItem(this.name,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }

}
class CheckboxField implements Field{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string){
        this.container = <HTMLElement>document.createElement('div');
        this.element = <HTMLInputElement>document.createElement('input');
        this.labelelement = <HTMLLabelElement>document.createElement('label');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.checkboxInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render(): HTMLElement{
        return this.container;
    }
    getvalue(): any{
        return this.element.checked;
    };
    saveToLocalStorage = (data: object) =>{
        if(this.container) localStorage.setItem(this.name,JSON.stringify(data));
    };
    getItemsFromLocalStorage = () =>{
        const items = {...localStorage};
        for (const [key, value] of Object.entries(items)){
            console.log(key, value);
            console.log(JSON.parse(value));
        }
    }
}

class TextAreaField implements Field{
    name: string;
    label: string;
    type: AddRecipe;
    element: HTMLInputElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string){
        this.container = <HTMLElement>document.createElement('div');
        this.element = <HTMLInputElement>document.createElement('input');
        this.labelelement = <HTMLLabelElement>document.createElement('label');
        this.name=name;
        this.label=label;
        this.element.name= this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.textAreaInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render(): HTMLElement{
        return this.container;
    }
    getvalue(): any{
        return this.element.value
    };
    saveToLocalStorage = (data: object) =>{
        if(this.container) localStorage.setItem(this.name,JSON.stringify(data));
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
    div.innerText="Add";
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
    fields: Field[];
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