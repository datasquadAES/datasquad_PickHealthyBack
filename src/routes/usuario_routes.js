const express = require('express');
const router_usuario = express.Router();
const usuarioController = require('../controllers/usuario_controller');

/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre1:
 *                 type: string
 *               nombre2:
 *                 type: string
 *               apellido1:
 *                 type: string
 *               apellido2:
 *                 type: string
 *               username:
 *                 type: string
 *               numero_identificacion:
 *                 type: string
 *               id_tipo_identificacion:
 *                 type: integer
 *               id_tipo_usuario:
 *                 type: integer
 *               correo_electronico:
 *                 type: string
 *               password:
 *                 type: string
 *               estado_usuario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error al crear el usuario
 */
router_usuario.post('/usuarios', usuarioController.create);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       400:
 *         description: Error al obtener los usuarios
 */
router_usuario.get('/usuarios', usuarioController.findAll);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al obtener el usuario
 */
router_usuario.get('/usuarios/:id', usuarioController.findOne);

/**
 * @swagger
 * /api/usuarios/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo_electronico:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente
 *       401:
 *         description: Credenciales inválidas
 *       400:
 *         description: Error al iniciar sesión
 */
router_usuario.post('/usuarios/login', usuarioController.findByCredentials);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre1:
 *                 type: string
 *               nombre2:
 *                 type: string
 *               apellido1:
 *                 type: string
 *               apellido2:
 *                 type: string
 *               username:
 *                 type: string
 *               numero_identificacion:
 *                 type: string
 *               id_tipo_identificacion:
 *                 type: integer
 *               id_tipo_usuario:
 *                 type: integer
 *               correo_electronico:
 *                 type: string
 *               password:
 *                 type: string
 *               estado_usuario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al actualizar el usuario
 */
router_usuario.put('/usuarios/:id', usuarioController.update);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al eliminar el usuario
 */
router_usuario.delete('/usuarios/:id', usuarioController.delete);

module.exports = router_usuario;