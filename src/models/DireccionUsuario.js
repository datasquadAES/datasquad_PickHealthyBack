const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DireccionUsuario = sequelize.define('DireccionUsuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomenclatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_ciudad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'direction_usuario',
  timestamps: false,
});

module.exports = DireccionUsuario;