var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load join page
  app.get("/join", function(req, res) {
    res.render("join");
  });
  // Load signIn page
  app.get("/signin", function(req, res) {
    res.render("signin");
  });
  // Load recipe creation recipe page
  app.get("/myownrecipe", function(req,res) {
    res.render("myownrecipe");
  });

  app.get("/recipelist", function(req, res) {
    res.render("recipelist");
  });

  app.get("/recipelist/:name", function(req, res) {
    db.Recipe.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Ingredient, db.DietryRequirement]
    }).then(recipe => {
      console.log(recipe)
      res.render("recipelist", recipe);
    });
  });


  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
