// Get references to page elements
const $btnFindRecipe = $(".btn-find-recipe");
var $recipesSearch = $(".recipe-search");

// The API object contains methods for each kind of request we'll make
var API = {
  getRecipes: function() {
    return $.ajax({
      url: "/api/recipes/" + $recipesSearch.val(),
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
const refreshRecipes = function() {
  API.getRecipes().then(function(data) {
    // const $recipes = data.map(function(recipe) {
    // });
    console.log("something" + data.name);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

// Add event listeners to the submit and delete buttons
$btnFindRecipe.on("click", refreshRecipes);
