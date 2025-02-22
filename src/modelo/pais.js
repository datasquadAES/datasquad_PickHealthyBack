const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;

const Pais = sequelize.define('Pais', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'pais',
  timestamps: false
});

module.exports = Pais;