const Pais = require('../modelo/pais');

// Crear un nuevo país
exports.create = async (req, res) => {
  const { nombre } = req.body;
  try {
    const pais = await Pais.create({ nombre });
    res.status(201).json(pais);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los países
exports.findAll = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.status(200).json(paises);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un país por ID
exports.findOne = async (req, res) => {
  try {
    const pais = await Pais.findByPk(req.params.id);
    if (pais) {
      res.status(200).json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un país por ID
exports.update = async (req, res) => {
  const { nombre } = req.body;
  try {
    const [updated] = await Pais.update({ nombre }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPais = await Pais.findByPk(req.params.id);
      res.status(200).json(updatedPais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un país por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Pais.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};