var AddRecipe;
(function (AddRecipe) {
    AddRecipe["NameInput"] = "name";
    AddRecipe["IngredientInput"] = "ingredient";
    AddRecipe["TextAreaInput"] = "textarea";
    AddRecipe["PreTime"] = "pretime";
    AddRecipe["Checkbox"] = "checkbox";
    AddRecipe["submitInput"] = "submit";
})(AddRecipe || (AddRecipe = {}));
var Cook = /** @class */ (function () {
    function Cook() {
        this.form = new Form('box');
    }
    Cook.prototype.createForm = function () {
        var name = new InputRecipe('text', 'Name Recipe');
        var ingredient = new InputRecipe('text', 'Ingredient');
        var text = new TextAreaRecipe('text', 'text');
        var pretime = new InputRecipe('text', 'PreTime');
        var types = new CheckboxRecipe('typ', 'types');
        this.form.button = new SubmitButton('submitButton', 'button');
        this.form.fields.push(name);
        this.form.fields.push(ingredient);
        this.form.fields.push(text);
        this.form.fields.push(pretime);
        this.form.fields.push(types);
        this.form.render();
    };
    return Cook;
}());
var InputRecipe = /** @class */ (function () {
    function InputRecipe(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    InputRecipe.prototype.render = function () {
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    };
    InputRecipe.prototype.getvalue = function () {
        return this.element.value;
    };
    return InputRecipe;
}());
var CheckboxRecipe = /** @class */ (function () {
    function CheckboxRecipe(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    CheckboxRecipe.prototype.render = function () {
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    };
    CheckboxRecipe.prototype.getvalue = function () {
        return this.element.value;
    };
    return CheckboxRecipe;
}());
var TextAreaRecipe = /** @class */ (function () {
    function TextAreaRecipe(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = AddRecipe.NameInput;
    }
    TextAreaRecipe.prototype.render = function () {
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.htmlFor = this.element.id;
        label.innerHTML = this.label;
        div.appendChild(label);
        div.appendChild(this.element);
        return div;
    };
    TextAreaRecipe.prototype.getvalue = function () {
        return this.element.value;
    };
    return TextAreaRecipe;
}());
var SubmitButton = /** @class */ (function () {
    function SubmitButton(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.element.name = this.name;
        this.element.type = AddRecipe.submitInput;
    }
    SubmitButton.prototype.render = function () {
        var div = document.createElement('div');
        div.appendChild(this.element);
        return div;
    };
    return SubmitButton;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        var _this = this;
        this.fields.forEach(function (field) { return _this.formElement.appendChild(field.render()); });
        this.formElement.appendChild(this.button.render());
        this.formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            alert(_this.getValue());
        });
    };
    Form.prototype.getValue = function () {
        var value = '';
        this.fields.forEach(function (field) {
            value += field.label + ": " + field.getvalue() + "\n";
        });
        return value;
    };
    return Form;
}());
new Cook().createForm();
//# sourceMappingURL=addrecipe.js.map