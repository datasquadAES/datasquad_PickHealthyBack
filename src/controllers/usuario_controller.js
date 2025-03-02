const Usuario = require('../modelo/usuario');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");

// Crear un nuevo usuario
exports.create = async (req, res) => {
  try {
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

    // 🔐 Encriptar la contraseña correctamente
    const cryptedPw = await bcrypt.hash(password, 10);

    // 📌 Buscar usuario existente con mismo correo o identificación
    const existingUser = await Usuario.findOne({
      where: { 
        [Op.or]: [
          { username },
          { correo_electronico },
          { numero_identificacion }
        ]
      }
    });

    if (existingUser) {

      let message;

      if (existingUser.username === username) message = 'Username registrado';
      if (existingUser.correo_electronico === correo_electronico) message = 'Correo registrado';
      if (existingUser.numero_identificacion === numero_identificacion) message = 'Identificación registrada';

      return res.status(409).json({ error: message });
    }

    // 📝 Crear el usuario con la contraseña encriptada
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
      password: cryptedPw,
      estado_usuario,
      direccion,
      telefono
    });

    return res.status(201).json(usuario);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return res.status(500).json({ error: error.message });
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
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ where: { username } });
    const isMatch = await bcrypt.compare(password, usuario.password);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (usuario.estado_usuario === 'bloqueado') {
      return res.status(403).json({ error: 'Cuenta bloqueada por múltiples intentos fallidos.' });
    }

    if (usuario.password !== password) {
      // Incrementar intentos fallidos
      usuario.failed_attemps += 1;

      // Bloquear si supera los 3 intentos
      if (usuario.failed_attemps >= 3) {
        usuario.estado_usuario = 'bloqueado';
      }

      await usuario.save();
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Restablecer intentos fallidos al iniciar sesión correctamente
    usuario.failed_attemps = 0;
    await usuario.save();

    res.status(200).json(usuario);
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