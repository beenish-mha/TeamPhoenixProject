module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("recipe", {
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
  };
  return Recipe;
};
