const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;

const Pago = sequelize.define('Pago', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  metodo_pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transaccion_id: {
    type: DataTypes.STRING,
    allowNull: true, // o false, dependiendo de tus necesidades
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'pagos', // Opcional: si el nombre de la tabla no coincide con el nombre del modelo
  timestamps: false, // Opcional: si quieres createdAt y updatedAt
});

module.exports = { Pago };