const TipoUsuario = require('../modelo/tipo_usuario');

// Crear un nuevo tipo de usuario
exports.create = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const tipoUsuario = await TipoUsuario.create({ nombre, descripcion });
    res.status(201).json(tipoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los tipos de usuario
exports.findAll = async (req, res) => {
  try {
    const tiposUsuario = await TipoUsuario.findAll();
    res.status(200).json(tiposUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un tipo de usuario por ID
exports.findOne = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (tipoUsuario) {
      res.status(200).json(tipoUsuario);
    } else {
      res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un tipo de usuario por ID
exports.update = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const [updated] = await TipoUsuario.update({ nombre, descripcion }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTipoUsuario = await TipoUsuario.findByPk(req.params.id);
      res.status(200).json(updatedTipoUsuario);
    } else {
      res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un tipo de usuario por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await TipoUsuario.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};