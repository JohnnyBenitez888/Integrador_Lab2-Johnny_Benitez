const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Clasificacion = sequelize.define(
  "clasificaciones",
  {
    id_clasificacion: {
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
    tableName: "clasificaciones",
    timestamps: false,
  }
);

module.exports = Clasificacion;
