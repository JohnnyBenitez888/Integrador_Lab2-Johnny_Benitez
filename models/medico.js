const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

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
        allowNull: true
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
        allowNull: false
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

module.exports = Medico;