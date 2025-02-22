const TipoDocumento = require('../modelo/tipo_documento');

// Crear un nuevo tipo de documento
exports.create = async (req, res) => {
  const { nombre, sigla } = req.body;
  try {
    const tipoDocumento = await TipoDocumento.create({ nombre, sigla });
    res.status(201).json(tipoDocumento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los tipos de documento
exports.findAll = async (req, res) => {
  try {
    const tiposDocumento = await TipoDocumento.findAll();
    res.status(200).json(tiposDocumento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un tipo de documento por ID
exports.findOne = async (req, res) => {
  try {
    const tipoDocumento = await TipoDocumento.findByPk(req.params.id);
    if (tipoDocumento) {
      res.status(200).json(tipoDocumento);
    } else {
      res.status(404).json({ error: 'Tipo de documento no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un tipo de documento por ID
exports.update = async (req, res) => {
  const { nombre, sigla } = req.body;
  try {
    const [updated] = await TipoDocumento.update({ nombre, sigla }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTipoDocumento = await TipoDocumento.findByPk(req.params.id);
      res.status(200).json(updatedTipoDocumento);
    } else {
      res.status(404).json({ error: 'Tipo de documento no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un tipo de documento por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await TipoDocumento.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Tipo de documento no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};