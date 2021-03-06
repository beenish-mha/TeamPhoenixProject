module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
  };
  return User;
};
