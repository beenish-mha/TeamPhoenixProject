module.exports = function(sequelize, DataTypes) {
  const DietryRequriment = sequelize.define("DietryRequriment", {
    name: DataTypes.STRING
  });

  DietryRequriment.associate = models => {
    DietryRequriment.belongsTo(models.Recipe);
  };
  return DietryRequriment;
};
