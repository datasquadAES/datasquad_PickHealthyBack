const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;
const Pais = require('./pais');

const Ciudad = sequelize.define('Ciudad', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_pais: {
    type: DataTypes.INTEGER,
    references: {
      model: Pais,
      key: 'id'
    }
  }
}, {
  tableName: 'ciudad',
  timestamps: false
});

Ciudad.belongsTo(Pais, { foreignKey: 'id_pais' });

module.exports = Ciudad;