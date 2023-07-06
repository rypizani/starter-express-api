const { Model, DataTypes } = require("sequelize");

class Geral extends Model {
  static init(sequelize) {
    super.init(
      {
        quemsomos: DataTypes.STRING,
        ficha: DataTypes.STRING,
        binicio: DataTypes.STRING,
        bfinal: DataTypes.STRING,
        comment: DataTypes.STRING,

        
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Geral;
