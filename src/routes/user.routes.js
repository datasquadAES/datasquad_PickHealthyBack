const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Definir las rutas para los usuarios
router.get('/', userController.getUsers); // Obtener todos los usuarios
router.get('/:id', userController.getUserById); // Obtener un usuario por ID
router.post('/', userController.createUser); // Crear un nuevo usuario
router.put('/:id', userController.updateUser); // Actualizar un usuario existente
router.delete('/:id', userController.deleteUser); // Eliminar un usuario

module.exports = router;