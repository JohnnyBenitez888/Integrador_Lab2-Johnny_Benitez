const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ObraSocial = require('./obra_social'); // Importar el modelo de obraSocial

const Paciente = sequelize.define('pacientes', {
  id_paciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_completo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  domicilio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  id_obra_social: {
    type: DataTypes.INTEGER,
    references: {
      model: ObraSocial, // Relación con el modelo ObraSocial
      key: 'id_obra_social',
    },
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'pacientes',
  timestamps: false,
});

// Establecer la relación entre Paciente y ObraSocial
Paciente.belongsTo(ObraSocial, { foreignKey: 'id_obra_social' , as: 'obra_social'});

module.exports = Paciente;
