const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
/* const especialidad = require('./especialidad');
const medicos_especialidades = require('./medicos_especialidades') */

const Medico = sequelize.define('medicos', {
    id_medico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "medicos",
    timestamps: false,
  }
);

/* Medico.belongsToMany(especialidad, { 
    through: medicos_especialidades, // Nombre de la tabla intermedia
    foreignKey: 'id_medico', // Clave foránea en medicos_especialidades que conecta con Medico
    otherKey: 'id_especialidad', // Clave foránea en medicos_especialidades que conecta con Especialidad
    as: 'especialidades' // Alias para acceder a las especialidades de un médico
  });
 */
module.exports = Medico;