const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        comment: DataTypes.STRING,
        
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
