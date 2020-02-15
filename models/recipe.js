module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    name: DataTypes.STRING,
    method: DataTypes.TEXT,
    image: DataTypes.TEXT
  });

  Recipe.associate = models => {
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Recipe.hasMany(models.Ingredient);
    Recipe.hasMany(models.DietryRequriment);
  };
  return Recipe;
};
