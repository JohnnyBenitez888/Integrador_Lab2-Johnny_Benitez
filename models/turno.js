const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const paciente = require('./paciente'); // Importar el modelo de paciente
const estado_turno = require('./estado_turno'); // Importar el modelo de estado_turno
const agenda = require('./agenda'); // Importar el modelo de agenda

const Turno = sequelize.define('turnos', {
  id_turno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: paciente, // Relación con el modelo paciente
      key: 'id_paciente',
    },
  },
  id_estado_turno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: estado_turnos, // Relación con el modelo estado_turno
      key: 'id_estado_turno',  
    },
  },
  id_agenda: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: agenda, // Relación con el modelo agenda
      key: 'id_agenda',
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  horario_inicio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  horario_final: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'turnos',
  timestamps: false,
});

// Establecer la relación con los otros modelos
/* Turno.hasMany(paciente, { foreignKey: 'id_paciente' , as: 'paciente' });

Turno.hasMany(agenda, { foreignKey: 'id_agenda' , as: 'agenda' });

Turno.hasMany(estado_turno, { foreignKey: 'id_lei_turno' , as: 'estado_turno' });

Turno.belongsTo(agenda, { foreignKey: 'id_agenda' , as: 'agenda' });

Turno.belongsTo(paciente, { foreignKey: 'id_paciente' , as: 'paciente' });

Turno.belongsTo(estado_turno, { foreignKey: 'id_lei_turno' , as: 'estado_turno' }); */

module.exports = Turno;