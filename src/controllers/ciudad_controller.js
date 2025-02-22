const Ciudad = require('../modelo/ciudad');

// Crear una nueva ciudad
exports.create = async (req, res) => {
  const { nombre, id_pais } = req.body;
  try {
    const ciudad = await Ciudad.create({ nombre, id_pais });
    res.status(201).json(ciudad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las ciudades
exports.findAll = async (req, res) => {
  try {
    const ciudades = await Ciudad.findAll();
    res.status(200).json(ciudades);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una ciudad por ID
exports.findOne = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id);
    if (ciudad) {
      res.status(200).json(ciudad);
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una ciudad por ID
exports.update = async (req, res) => {
  const { nombre, id_pais } = req.body;
  try {
    const [updated] = await Ciudad.update({ nombre, id_pais }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCiudad = await Ciudad.findByPk(req.params.id);
      res.status(200).json(updatedCiudad);
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una ciudad por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Ciudad.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Ciudad no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};