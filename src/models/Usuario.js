const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre1: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre2: {
    type: DataTypes.STRING(50),
    allowNull: true, // No es obligatorio
  },
  apellido1: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellido2: {
    type: DataTypes.STRING(50),
    allowNull: true, // No es obligatorio
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  numero_identificacion: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  id_tipo_identificacion: {
    type: DataTypes.INTEGER,
    allowNull: true, // No es obligatorio
  },
  id_tipo_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true, // No es obligatorio
  },
  correo_electronico: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Valor por defecto: CURRENT_TIMESTAMP
    allowNull: true, // No es obligatorio
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Valor por defecto: CURRENT_TIMESTAMP
    allowNull: true, // No es obligatorio
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  estado_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva los campos createdAt y updatedAt de Sequelize
});

module.exports = Usuario;