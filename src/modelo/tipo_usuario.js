const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;

const TipoUsuario = sequelize.define('TipoUsuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'tipo_usuario',
  timestamps: false
});

module.exports = TipoUsuario;