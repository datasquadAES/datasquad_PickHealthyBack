const { Pago } = require('../modelo/pago'); // Importa el modelo Pago desde sequelize

// Crear un nuevo pago
exports.create = async (req, res) => {
  try {
    const pago = await Pago.create(req.body);
    res.status(201).json(pago);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
  // Obtener todos los pagos
  exports.findAll = async (req, res) => {
    try {
      const pagos = await Pago.findAll();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // Obtener un pago por ID
  exports.findOne = async (req, res) => {
    try {
      const pago = await Pago.findByPk(req.params.id);
      if (pago) {
        res.status(200).json(pago);
      } else {
        res.status(404).json({ error: "Pago no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // Actualizar un pago por ID
  exports.update = async (req, res) => {
    try {
      const [updated] = await Pago.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedPago = await Pago.findByPk(req.params.id);
        res.status(200).json(updatedPago);
      } else {
        res.status(404).json({ error: "Pago no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // Eliminar un pago por ID
exports.delete = async (req, res) => {
    try {
      const deleted = await Pago.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: "Pago no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
