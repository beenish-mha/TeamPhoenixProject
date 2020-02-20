var db = require("../models");
//const axios = require("axios");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({
      include: [db.Ingredient, db.DietryRequirement]
    })
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get a single recipe by name
  app.get("/api/recipes/:name", function(req, res) {
    db.Recipe.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Ingredient, db.DietryRequirement]
    })
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get all dietry Requirements
  app.get("/api/dietryrequirements", function(req, res) {
    db.DietryRequirement.findAll({})
      .then(requirements => {
        res.json(requirements);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get a single requirement by name
  app.get("/api/dietryrequirements/:name", function(req, res) {
    db.DietryRequirement.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(requirements => {
        res.json(requirements);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get all ingredients
  app.get("/api/ingredients", function(req, res) {
    db.Ingredient.findAll({})
      .then(ingredients => {
        res.json(ingredients);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get a single ingredient by name
  app.get("/api/ingredients/:name", function(req, res) {
    db.Ingredient.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(ingredients => {
        res.json(ingredients);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({})
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Get a single user by name
  app.get("/api/users/:name", function(req, res) {
    db.User.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(404).end();
      });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(users) {
      res.json(users);
    });
  });

  // Create a new dietry requirement
  app.post("/api/dietryrequirements", function(req, res) {
    db.DietryRequirement.create(req.body).then(function(requirements) {
      res.json(requirements);
    });
  });

  // Create a new ingredient
  app.post("/api/ingredients", function(req, res) {
    db.Ingredient.create(req.body).then(function(ingredients) {
      res.json(ingredients);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body)
      .then(function(recipe) {
        recipe.setIngredients(req.body.ingredients);
        return recipe;
      })
      .then(recipe => {
        recipe.setDietryRequirements(req.body.dietryRequirements);
        return recipe;
      })
      .then(recipe => {
        res.json(recipe);
      });
  });
};
