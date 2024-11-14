const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
/* const medico = require("./medico"); // Importar el modelo de medico
const medicos_especialidades = require('./medicos_especialidades') */

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

/* Especialidad.belongsToMany(medico, { 
  through: medicos_especialidades, // Nombre de la tabla intermedia
  foreignKey: 'id_especialidad', // Clave foránea en medicos_especialidades que conecta con Especialidad
  otherKey: 'id_medico', // Clave foránea en medicos_especialidades que conecta con Medico
  as: 'medicos' // Alias para acceder a los médicos de una especialidad
}); */

module.exports = Especialidad;