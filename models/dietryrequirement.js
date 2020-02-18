module.exports = function(sequelize, DataTypes) {
  const DietryRequirement = sequelize.define("DietryRequirement", {
    name: DataTypes.STRING
  });

    DietryRequirement.associate = models => {
      DietryRequirement.belongsToMany(models.Recipe, { through: "RecipeRequirement"})
    }
  return DietryRequirement;
};
