const Usuario = require('../modelo/usuario');

// Crear un nuevo usuario
exports.create = async (req, res) => {
  const {
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    username,
    numero_identificacion,
    id_tipo_identificacion,
    id_tipo_usuario,
    correo_electronico,
    password,
    estado_usuario,
    direccion,
    telefono
  } = req.body;
  try {
    const usuario = await Usuario.create({
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      username,
      numero_identificacion,
      id_tipo_identificacion,
      id_tipo_usuario,
      correo_electronico,
      password,
      estado_usuario,
      direccion,
      telefono
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los usuarios
exports.findAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un usuario por ID
exports.findOne = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un usuario por username y password
exports.findByCredentials = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    });
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un usuario por ID
exports.update = async (req, res) => {
  const {
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    username,
    numero_identificacion,
    id_tipo_identificacion,
    id_tipo_usuario,
    correo_electronico,
    password,
    estado_usuario,
    direccion,
    telefono
  } = req.body;
  try {
    const [updated] = await Usuario.update({
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      username,
      numero_identificacion,
      id_tipo_identificacion,
      id_tipo_usuario,
      correo_electronico,
      password,
      estado_usuario,
      direccion,
      telefono
    }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUsuario = await Usuario.findByPk(req.params.id);
      res.status(200).json(updatedUsuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un usuario por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};