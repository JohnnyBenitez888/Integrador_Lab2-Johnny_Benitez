const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Estado_turno = sequelize.define(
  "estado_turnos",
  {
    id_estado_turno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "estado_turnos",
    timestamps: false,
  }
);

module.exports = Estado_turno;