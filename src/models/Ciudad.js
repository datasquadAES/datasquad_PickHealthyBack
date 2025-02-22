const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ciudad = sequelize.define('Ciudad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_pais: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'ciudad',
  timestamps: false,
});

module.exports = Ciudad;