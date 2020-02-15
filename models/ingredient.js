module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    name: DataTypes.STRING
  });
  Ingredient.associate = models => {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Ingredient;
};
