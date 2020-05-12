var AddRecipe;
(function (AddRecipe) {
    AddRecipe["nameInput"] = "name";
    AddRecipe["ingredientInput"] = "ingredient";
    AddRecipe["textAreaInput"] = "textarea";
    AddRecipe["preTime"] = "pretime";
    AddRecipe["checkboxInput"] = "checkbox";
    AddRecipe["submitInput"] = "submit";
})(AddRecipe || (AddRecipe = {}));
class Cook {
    constructor() {
        this.saveToLocalStorage = (data) => {
            if (this.form)
                localStorage.setItem(this.form, JSON.stringify(data));
        };
        this.getItemsFromLocalStorage = () => {
            const items = Object.assign({}, localStorage);
            for (const [key, value] of Object.entries(items)) {
                console.log(key, value);
                console.log(JSON.parse(value));
            }
        };
        this.form = new Form('box');
    }
    createForm() {
        let name = new InputField('textfieldname', 'Name Recipe:');
        let ingredient = new InputField('textfieldingredient', 'Ingredient:');
        let text = new TextAreaField('text', 'Text:');
        let pretime = new InputField('textfieldpretime', 'PreTime:');
        let checkbox = new CheckboxField('checkboxfield', 'categories:');
        this.form.button = new SubmitButton('submitButton', 'button');
        this.form.fields.push(name);
        this.form.fields.push(ingredient);
        this.form.fields.push(text);
        this.form.fields.push(pretime);
        this.form.fields.push(checkbox);
        this.form.render();
    }
    ;
}
class InputField {
    constructor(name, label) {
        this.saveToLocalStorage = (data) => {
            if (this.container)
                localStorage.setItem(this.name, JSON.stringify(data));
        };
        this.getItemsFromLocalStorage = () => {
            const items = Object.assign({}, localStorage);
            for (const [key, value] of Object.entries(items)) {
                console.log(key, value);
                console.log(JSON.parse(value));
            }
        };
        this.container = document.createElement('div');
        this.element = document.createElement('input');
        this.labelelement = document.createElement('label');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.nameInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render() {
        return this.container;
    }
    getvalue() {
        return this.element.value;
    }
    ;
}
class CheckboxField {
    constructor(name, label) {
        this.saveToLocalStorage = (data) => {
            if (this.container)
                localStorage.setItem(this.name, JSON.stringify(data));
        };
        this.getItemsFromLocalStorage = () => {
            const items = Object.assign({}, localStorage);
            for (const [key, value] of Object.entries(items)) {
                console.log(key, value);
                console.log(JSON.parse(value));
            }
        };
        this.container = document.createElement('div');
        this.element = document.createElement('input');
        this.labelelement = document.createElement('label');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.checkboxInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render() {
        return this.container;
    }
    getvalue() {
        return this.element.checked;
    }
    ;
}
class TextAreaField {
    constructor(name, label) {
        this.saveToLocalStorage = (data) => {
            if (this.container)
                localStorage.setItem(this.name, JSON.stringify(data));
        };
        this.getItemsFromLocalStorage = () => {
            const items = Object.assign({}, localStorage);
            for (const [key, value] of Object.entries(items)) {
                console.log(key, value);
                console.log(JSON.parse(value));
            }
        };
        this.container = document.createElement('div');
        this.element = document.createElement('input');
        this.labelelement = document.createElement('label');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = AddRecipe.textAreaInput;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render() {
        return this.container;
    }
    getvalue() {
        return this.element.value;
    }
    ;
}
class SubmitButton {
    constructor(name, label) {
        this.saveToLocalStorage = (data) => {
            if (this.name)
                localStorage.setItem(this.name, JSON.stringify(data));
        };
        this.getItemsFromLocalStorage = () => {
            const items = Object.assign({}, localStorage);
            for (const [key, value] of Object.entries(items)) {
                console.log(key, value);
                console.log(JSON.parse(value));
            }
        };
        this.element = document.createElement('input');
        this.name = name;
        this.element.name = this.name;
        this.element.type = AddRecipe.submitInput;
    }
    render() {
        const div = document.createElement('div');
        div.innerText = "Add";
        div.appendChild(this.element);
        return div;
    }
    ;
}
class Form {
    constructor(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    render() {
        this.fields.forEach(field => this.formElement.appendChild(field.render()));
        this.formElement.appendChild(this.button.render());
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(this.getValue());
        });
    }
    getValue() {
        let value = '';
        this.fields.forEach(field => {
            value += `${field.label}: ${field.getvalue()}\n`;
        });
        return value;
    }
}
new Cook().createForm();
//# sourceMappingURL=addrecipe.js.map