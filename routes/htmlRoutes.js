var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load join page
  app.get("/join", function(req, res) {
    res.render("join");
  });
  // Load signIn page
  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/api/recipes/:name", function(req, res) {
    db.Recipe.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Ingredient, db.DietryRequirement]
    }).then(dbRecipe => {
      console.log("beenish" + dbRecipe);
      res.render("recipelist", dbRecipe);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
