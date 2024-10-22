const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const medico = require("./medico"); // Importar el modelo de medico
const especialidad = require("./especialidad"); // Importar el modelo de especialidad

const Medico_especialidad = sequelize.define(
  "medicos_especialidades",
  {
    id_medico_especialidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_medico: {
      type: DataTypes.INTEGER,
      references: {
        model: medico, // Relación con el modelo medico
        key: "id_medico",
      },
      allowNull: false,
    },
    id_especialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: especialidad, // Relación con el modelo especialidad
        key: "id_especialidad",
      },
      allowNull: false,
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "medicos_especialidades",
    timestamps: false,
  }
);


Medico_especialidad.belongsToMany(medico, {
  foreignKey: "id_medico",
  as: "medico",
});
Medico_especialidad.belongsToMany(especialidad, {
  foreignKey: "id_especialidad",
  as: "especialidad",
});

module.exports = Medico_especialidad;
