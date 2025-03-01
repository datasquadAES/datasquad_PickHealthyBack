const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;
const TipoDocumento = require('./tipo_documento');
const TipoUsuario = require('./tipo_usuario');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre1: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nombre2: {
    type: DataTypes.STRING(50)
  },
  apellido1: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido2: {
    type: DataTypes.STRING(50)
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  numero_identificacion: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  id_tipo_identificacion: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoDocumento,
      key: 'id'
    }
  },
  id_tipo_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoUsuario,
      key: 'id'
    }
  },
  correo_electronico: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  estado_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['activo', 'inactivo']]
    }
  },
  
  direccion: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true
  }
}, {
  tableName: 'usuario',
  timestamps: false
});

Usuario.belongsTo(TipoDocumento, { foreignKey: 'id_tipo_identificacion' });
Usuario.belongsTo(TipoUsuario, { foreignKey: 'id_tipo_usuario' });

module.exports = Usuario;