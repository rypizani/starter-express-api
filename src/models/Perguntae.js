const { Model, DataTypes } = require("sequelize");

class Perguntae extends Model {
  static init(sequelize) {
    super.init(
      {
        p: DataTypes.STRING,      
        rota: DataTypes.STRING,
        put: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Perguntae;
