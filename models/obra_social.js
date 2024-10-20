const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const ObraSocial = sequelize.define('obra_social', {
  id_obra_social: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'obra_social',
  timestamps: false,
});

//ObraSocial.hasMany(paciente, { foreignKey: 'id_obra_social' });

module.exports = ObraSocial;
