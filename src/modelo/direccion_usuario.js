const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;
const Ciudad = require('./ciudad');
const Usuario = require('./usuario');

const DireccionUsuario = sequelize.define('DireccionUsuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomenclatura: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  id_ciudad: {
    type: DataTypes.INTEGER,
    references: {
      model: Ciudad,
      key: 'id'
    }
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
}, {
  tableName: 'direccion_usuario',
  timestamps: false
});

DireccionUsuario.belongsTo(Ciudad, { foreignKey: 'id_ciudad' });
DireccionUsuario.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = DireccionUsuario;