const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const medicos_especialidades = require("./medicos_especialidades"); // Importar el modelo de medicos_especialidades
const clasificacion = require("./clasificacion"); // Importar el modelo de clasificacion
const sucursal = require("./sucursal"); // Importar el modelo de sucursal

const Agenda = sequelize.define(
  "agendas",
  {
    id_agenda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_medico_especialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: medicos_especialidades, // Relación con el modelo medicos_especialidades
        key: "id_medico_especialidad",
      },
    },
    id_clasificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: clasificacion, // Relación con el modelo clasificacion
        key: "id_clasificacion",
      },
    },
    dias: {
      type: DataTypes.SET,
      allowNull: true,
      values: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duracion_turno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_sucursal: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: sucursal, // Relación con el modelo sucursal
        key: "nombre_sucursal",
      },
    },
  },
  {
    tableName: "agendas",
    timestamps: false,
  }
);

// Establecer la relación con los otros modelos
Agenda.belongsTo(medicos_especialidades, { foreignKey: 'id_medico_especialidad' });
Agenda.belongsTo(clasificacion, { foreignKey: 'id_clasificacion' });
Agenda.belongsTo(sucursal, { foreignKey: 'nombre_sucursal', targetKey: 'nombre_sucursal' }); // Relación con el nombre de la sucursal

module.exports = Agenda;
