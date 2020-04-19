class Bootstrapper {
  renderer: Renderer;
  recipeCategories: RecipeCategories<IRecipeCategory>;

  loadRecipes() {
      var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      try {
          let category = this.recipeCategories.items
              .filter(item => item.name === el.value)
              .reduce(item => {
                var rc = new RecipeCategory({
                  name: el.value,
                  foodGroups: item.foodGroups,
                  description: item.description,
                  examples: item.examples
                });
                return rc;                
              });
          this.renderer.renderCategory(category);
      }
      catch (ex) { alert(ex.message) }
  }
  init() {
      let categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      categoriesSelect.onchange = () => this.loadRecipes();
      let recipeLoader = new RecipeLoader("/json/recipeTypes.json");
      recipeLoader.load().then((recipeData: IRecipeData) => {
          this.recipeCategories = recipeData.recipeCategories;
          this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
      });
  }
  
}
window.onload = () => { 
  var bootstrapper = new Bootstrapper();
  bootstrapper.init();
};

  




