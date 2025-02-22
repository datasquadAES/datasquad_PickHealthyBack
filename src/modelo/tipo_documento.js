const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;

const TipoDocumento = sequelize.define('TipoDocumento', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  sigla: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  tableName: 'tipo_documento',
  timestamps: false
});

module.exports = TipoDocumento;