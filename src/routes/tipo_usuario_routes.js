const express = require('express');
const router_tipo_usuario = express.Router();
const tipoUsuarioController = require('../controllers/tipo_usuario_controller');

/**
 * @swagger
 * tags:
 *   name: TipoUsuario
 *   description: Gestión de tipos de usuario
 */

/**
 * @swagger
 * /api/tipos_usuario:
 *   post:
 *     summary: Crear un nuevo tipo de usuario
 *     tags: [TipoUsuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de usuario creado exitosamente
 *       400:
 *         description: Error al crear el tipo de usuario
 */
router_tipo_usuario.post('/tipos_usuario', tipoUsuarioController.create);

/**
 * @swagger
 * /api/tipos_usuario:
 *   get:
 *     summary: Obtener todos los tipos de usuario
 *     tags: [TipoUsuario]
 *     responses:
 *       200:
 *         description: Lista de tipos de usuario
 *       400:
 *         description: Error al obtener los tipos de usuario
 */
router_tipo_usuario.get('/tipos_usuario', tipoUsuarioController.findAll);

/**
 * @swagger
 * /api/tipos_usuario/{id}:
 *   get:
 *     summary: Obtener un tipo de usuario por ID
 *     tags: [TipoUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de usuario
 *     responses:
 *       200:
 *         description: Tipo de usuario encontrado
 *       404:
 *         description: Tipo de usuario no encontrado
 *       400:
 *         description: Error al obtener el tipo de usuario
 */
router_tipo_usuario.get('/tipos_usuario/:id', tipoUsuarioController.findOne);

/**
 * @swagger
 * /api/tipos_usuario/{id}:
 *   put:
 *     summary: Actualizar un tipo de usuario por ID
 *     tags: [TipoUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de usuario actualizado exitosamente
 *       404:
 *         description: Tipo de usuario no encontrado
 *       400:
 *         description: Error al actualizar el tipo de usuario
 */
router_tipo_usuario.put('/tipos_usuario/:id', tipoUsuarioController.update);

/**
 * @swagger
 * /api/tipos_usuario/{id}:
 *   delete:
 *     summary: Eliminar un tipo de usuario por ID
 *     tags: [TipoUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de usuario
 *     responses:
 *       204:
 *         description: Tipo de usuario eliminado exitosamente
 *       404:
 *         description: Tipo de usuario no encontrado
 *       400:
 *         description: Error al eliminar el tipo de usuario
 */
router_tipo_usuario.delete('/tipos_usuario/:id', tipoUsuarioController.delete);

module.exports = router_tipo_usuario;