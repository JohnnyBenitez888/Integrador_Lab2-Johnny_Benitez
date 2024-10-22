const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Dia = sequelize.define(
  "dias",
  {
    id_dia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "dias",
    timestamps: false,
  }
);

module.exports = Dia;