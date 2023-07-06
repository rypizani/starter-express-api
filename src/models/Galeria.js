const { Model, DataTypes } = require("sequelize");

class Galeria extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        subtitle: DataTypes.STRING,
        description: DataTypes.STRING,
        rota: DataTypes.STRING,
        put: DataTypes.STRING,

      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Galeria;
