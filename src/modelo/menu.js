const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;



const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  imagen_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'menu', 
  timestamps: false, 
});

module.exports = Menu;