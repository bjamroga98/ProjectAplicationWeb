class Renderer {
    constructor(recipeCategoriesSummary) {
        this.recipeCategoriesSummary = recipeCategoriesSummary;
        if (recipeCategoriesSummary) {
            this.renderCategories(recipeCategoriesSummary);
        }
        else {
            this.renderError();
        }
    }
    renderCategories(recipeCategoriesSummary) {
        let recipeSelect = document.getElementById('RecipeCategory');
        recipeCategoriesSummary.items.forEach((category) => {
            let opt = document.createElement('option');
            opt.setAttribute('title', category.title);
            opt.innerHTML = category.text;
            recipeSelect.appendChild(opt);
        });
    }
    renderCategory(category) {
        let foodGroups = document.getElementById('FoodGroups');
        foodGroups.value = '';
        let html = '<ul>';
        for (var i = 0, len = category.foodGroups.length; i < len; i++) {
            html += '<li>' + category.foodGroups[i].name + '</li>';
        }
        foodGroups.innerHTML = html + '</ul>';
        let el = document.getElementById('recipeDesc');
        el.innerHTML = category.description;
        this.renderExamples(category);
    }
    renderExamples(category) {
        let examples = document.getElementById('examples');
        examples.value = '';
        let html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) {
            let example = category.examples[i];
            let ingredients = example.ingredients.map((ingredient) => {
                return ingredient.name;
            });
            html += '<li>' +
                '<h4>' + example.name + ' </h4>' +
                '<strong>Ingredients: </strong>' + ingredients.join(', ') +
                '<br/ ><strong>Text: </strong>' + example.text +
                '<br /><strong>Preparation Time: </strong>' + example.prepTime +
                '</li>';
        }
        examples.innerHTML = html + '</ol>';
    }
    renderError() {
        let examples = document.getElementById('examples');
        examples.value = 'Unable to load data!';
    }
}
//# sourceMappingURL=renderer.js.map