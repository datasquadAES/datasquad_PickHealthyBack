const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres_db').sequelize;
const Usuario = require('./usuario');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'pendiente'
  },
  dealer_id: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  restaurant_address: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  destination_address: {
    type: DataTypes.STRING(500),
    allowNull: true,
  }
}, {
  tableName: 'pedidos',
  timestamps: false
});

Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Pedido.associate = (models) => {
  Pedido.hasMany(models.PedidoDetalle, { foreignKey: "pedidoId", as: "detalles" });
};

module.exports = Pedido;