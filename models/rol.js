const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Rol = sequelize.define('roles', {
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'roles',
  timestamps: false,
});



module.exports = Rol;