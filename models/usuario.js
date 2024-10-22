const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const rol = require('./rol'); // Importar el modelo de obraSocial

const Usuario = sequelize.define('usuarios', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: rol, // Relación con el modelo rol
      key: 'id_rol',
    },
    allowNull: false,
  }
}, {
  tableName: 'usuarios',
  timestamps: false,
});


Usuario.hasOne(rol, { foreignKey: 'id_rol' , as: 'rol'});

module.exports = Usuario;