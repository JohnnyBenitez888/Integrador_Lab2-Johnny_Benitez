const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const agenda = require("./agenda");

const Dia = sequelize.define(
  "dias",
  {
    id_agenda: {
      type: DataTypes.INTEGER,
      references: {
        model: agenda, // Relación con el modelo agenda
        key: 'id_agenda',
      },
      allowNull: false,
    },
    dia: {
      type: DataTypes.ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'),
      allowNull: false,
    }
  },
  {
    tableName: "dias",
    timestamps: false,
  }
);

module.exports = Dia;