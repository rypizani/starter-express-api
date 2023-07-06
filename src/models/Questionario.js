const { Model, DataTypes } = require("sequelize");

class Questionario extends Model {
  static init(sequelize) {
    super.init(
      {
        p: DataTypes.STRING,
        r1: DataTypes.STRING,
        r2: DataTypes.STRING,
        r3: DataTypes.STRING,
        r4: DataTypes.STRING,
        r5: DataTypes.STRING,
        r6: DataTypes.STRING,
        nome: DataTypes.STRING,
        rota: DataTypes.STRING,


      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Questionario;
