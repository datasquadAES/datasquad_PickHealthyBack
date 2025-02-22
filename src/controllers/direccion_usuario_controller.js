const DireccionUsuario = require('../modelo/direccion_usuario');

// Crear una nueva dirección de usuario
exports.create = async (req, res) => {
  const { nomenclatura, id_ciudad, id_usuario } = req.body;
  try {
    const direccionUsuario = await DireccionUsuario.create({
      nomenclatura,
      id_ciudad,
      id_usuario
    });
    res.status(201).json(direccionUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las direcciones de usuario
exports.findAll = async (req, res) => {
  try {
    const direccionesUsuario = await DireccionUsuario.findAll();
    res.status(200).json(direccionesUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una dirección de usuario por ID
exports.findOne = async (req, res) => {
  try {
    const direccionUsuario = await DireccionUsuario.findByPk(req.params.id);
    if (direccionUsuario) {
      res.status(200).json(direccionUsuario);
    } else {
      res.status(404).json({ error: 'Dirección de usuario no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una dirección de usuario por ID
exports.update = async (req, res) => {
  const { nomenclatura, id_ciudad, id_usuario } = req.body;
  try {
    const [updated] = await DireccionUsuario.update({
      nomenclatura,
      id_ciudad,
      id_usuario
    }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedDireccionUsuario = await DireccionUsuario.findByPk(req.params.id);
      res.status(200).json(updatedDireccionUsuario);
    } else {
      res.status(404).json({ error: 'Dirección de usuario no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una dirección de usuario por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await DireccionUsuario.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Dirección de usuario no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};