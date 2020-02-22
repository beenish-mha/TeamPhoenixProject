//myCookBook project code
//const $btnJoin = $(".btn-join");

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
const $userSubmit = $("#userSubmit");
const $btnSaveRecipe = $(".btn-save-recipe");
const $recipeName = $(".recipe-name");
const $recipeIngredients = $(".recipe-ingredients");
const $recipeMethod = $(".recipe-method");
const $recipeDr = $(".recipe-dr");
const $recipeImage = $(".recipe-image");

$submitBtn.on("click", function() {
  var searchResult = document.getElementById("recipeSearch").value;
  location.href = "recipelist/" + searchResult;
});

var API = {
  saveRecipe: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/recipes",
      data: JSON.stringify(example)
    });
  }
};

const recipeSubmit = function(event) {
  var newRecipe = {
    name: $recipeName.val().trim(),
    ingredients: $recipeIngredients.val().trim(),
    method: $recipeMethod.val().trim(),
    dietryRequirement: $recipeDr.val().trim(),
    image: $recipeImage.val().trim(),
    UserId: 1
  };
  API.saveRecipe(newRecipe).then(function() {
    console.log("new recipe added");
  });
};
// $exampleList.on("click", handleDeleteBtnClick);
$btnSaveRecipe.on("click", recipeSubmit);
