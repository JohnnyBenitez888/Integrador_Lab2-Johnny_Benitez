const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Sucursal = sequelize.define('sucursales', {
  nombre_sucursal: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'sucursales',
  timestamps: false,
});


module.exports = Sucursal;