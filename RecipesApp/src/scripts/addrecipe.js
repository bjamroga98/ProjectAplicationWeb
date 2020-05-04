var AddRecipe;
(function (AddRecipe) {
    AddRecipe["NameInput"] = "name";
    AddRecipe["IngredientInput"] = "ingredient";
    AddRecipe["TextAreaInput"] = "textarea";
    AddRecipe["PreTime"] = "pretime";
    AddRecipe["Checkbox"] = "checkbox";
    AddRecipe["submitInput"] = "submit";
})(AddRecipe || (AddRecipe = {}));
class Cook {
    constructor() {
        this.form = new Form('box');
    }
    createForm() {
        let name = new InputRecipe('text', 'Name Recipe:');
        let ingredient = new InputRecipe('text', 'Ingredient:');
        let text = new TextAreaRecipe('text', 'Text:');
        let pretime = new InputRecipe('text', 'PreTime:');
        let types = new CheckboxRecipe('typ', 'categories:');
        this.form.button = new SubmitButton('submitButton', 'button');
        this.form.fields.push(name);
        this.form.fields.push(ingredient);
        this.form.fields.push(text);
        this.form.fields.push(pretime);
        this.form.fields.push(types);
        this.form.render();
    }
}
class InputRecipe {
    constructor(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    render() {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    }
    getvalue() {
        return this.element.value;
    }
}
class CheckboxRecipe {
    constructor(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    render() {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    }
    getvalue() {
        return this.element.value;
    }
}
class TextAreaRecipe {
    constructor(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    render() {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    }
    getvalue() {
        return this.element.value;
    }
}
class SubmitButton {
    constructor(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.element.name = this.name;
        this.element.type = AddRecipe.submitInput;
    }
    render() {
        const div = document.createElement('div');
        div.appendChild(this.element);
        return div;
    }
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