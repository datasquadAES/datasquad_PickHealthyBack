// @ts-nocheck
const Pedido = require('../modelo/pedido');

// Crear un nuevo pedido
exports.create = async (req, res) => {
  const { usuario_id, fecha_pedido, estado } = req.body;
  try {
    const pedido = await Pedido.create({ 
      usuario_id, fecha_pedido, estado
     });
    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los pedidos
exports.findAll = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un pedido por ID
exports.findOne = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.find = async (req, res) => {

  const { usuario_id } = req.query; 

  try {
    const pedidos = await Pedido.findAll({
      where: {usuario_id},
      order: [['fecha_pedido', 'DESC']] 
    });
    res.status(200).json(pedidos);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
    
  }

}

// Actualizar un pedido por ID
exports.update = async (req, res) => {
  const { usuario_id, fecha_pedido, estado, dealer_id } = req.body;
  try {
    const updated = await Pedido.update({
      usuario_id,
      fecha_pedido,
      estado,
      dealer_id
    }, {
      where: { id: req.params.id }
    });
    if (updated) {
      console.log('Pedido actualizado: ' + updated)
      const updatedPedido = await Pedido.findByPk(req.params.id);
      res.status(200).json(updatedPedido);
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un pedido por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Pedido.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};