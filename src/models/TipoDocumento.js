const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TipoDocumento = sequelize.define('TipoDocumento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sigla: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tipo_documento',
  timestamps: false,
});

module.exports = TipoDocumento;