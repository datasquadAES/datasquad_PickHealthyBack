const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pais = sequelize.define('Pais', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'pais',
  timestamps: false,
});

module.exports = Pais;