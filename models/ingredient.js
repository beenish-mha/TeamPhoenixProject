module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    name: DataTypes.STRING,
    amount: DataTypes.STRING
  });
  Ingredient.associate = models => {
  Ingredient.belongsToMany(models.Recipe, { through: "RecipeIngredient"});
  };
  return Ingredient;
};
