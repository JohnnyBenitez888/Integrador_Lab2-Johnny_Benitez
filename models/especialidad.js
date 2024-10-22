const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Especialidad = sequelize.define(
  "especialidades",
  {
    id_especialidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "especialidades",
    timestamps: false,
  }
);

module.exports = Especialidad;