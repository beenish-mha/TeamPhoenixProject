// Get references to page elements
const $btnFindRecipe = $(".btn-find-recipe");
const $recipesSearch = $(".recipe-search");

// The API object contains methods for each kind of request we'll make
var API = {
  getRecipes: function() {
    return $.ajax({
      url: "/api/recipes/" + $recipesSearch.val(),
      type: "GET"
    });
  }
};

const refreshRecipes = function() {
  API.getRecipes().then(function(data) {
    console.log("something" + data.name);
  });
};

$btnFindRecipe.on("click", refreshRecipes);
