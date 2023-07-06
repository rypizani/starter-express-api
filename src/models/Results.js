const { Model, DataTypes } = require("sequelize");

class Results extends Model {
  static init(sequelize) {
    super.init(
      {
      result1: DataTypes.STRING,
      result2: DataTypes.STRING,
      result3: DataTypes.STRING,
      result4: DataTypes.STRING,
      result5: DataTypes.STRING,
      result6: DataTypes.STRING,
      result7: DataTypes.STRING,
      result8: DataTypes.STRING,
      result9: DataTypes.STRING,
      result10: DataTypes.STRING,
      idpergunta: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Results;
