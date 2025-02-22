const express = require('express');
const router_direccion_usuario = express.Router();
const direccionUsuarioController = require('../controllers/direccion_usuario_controller');

/**
 * @swagger
 * tags:
 *   name: DireccionUsuario
 *   description: Gestión de direcciones de usuario
 */

/**
 * @swagger
 * /api/direcciones_usuario:
 *   post:
 *     summary: Crear una nueva dirección de usuario
 *     tags: [DireccionUsuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomenclatura:
 *                 type: string
 *               id_ciudad:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Dirección de usuario creada exitosamente
 *       400:
 *         description: Error al crear la dirección de usuario
 */
router_direccion_usuario.post('/direcciones_usuario', direccionUsuarioController.create);

/**
 * @swagger
 * /api/direcciones_usuario:
 *   get:
 *     summary: Obtener todas las direcciones de usuario
 *     tags: [DireccionUsuario]
 *     responses:
 *       200:
 *         description: Lista de direcciones de usuario
 *       400:
 *         description: Error al obtener las direcciones de usuario
 */
router_direccion_usuario.get('/direcciones_usuario', direccionUsuarioController.findAll);

/**
 * @swagger
 * /api/direcciones_usuario/{id}:
 *   get:
 *     summary: Obtener una dirección de usuario por ID
 *     tags: [DireccionUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección de usuario
 *     responses:
 *       200:
 *         description: Dirección de usuario encontrada
 *       404:
 *         description: Dirección de usuario no encontrada
 *       400:
 *         description: Error al obtener la dirección de usuario
 */
router_direccion_usuario.get('/direcciones_usuario/:id', direccionUsuarioController.findOne);

/**
 * @swagger
 * /api/direcciones_usuario/{id}:
 *   put:
 *     summary: Actualizar una dirección de usuario por ID
 *     tags: [DireccionUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomenclatura:
 *                 type: string
 *               id_ciudad:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Dirección de usuario actualizada exitosamente
 *       404:
 *         description: Dirección de usuario no encontrada
 *       400:
 *         description: Error al actualizar la dirección de usuario
 */
router_direccion_usuario.put('/direcciones_usuario/:id', direccionUsuarioController.update);

/**
 * @swagger
 * /api/direcciones_usuario/{id}:
 *   delete:
 *     summary: Eliminar una dirección de usuario por ID
 *     tags: [DireccionUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección de usuario
 *     responses:
 *       204:
 *         description: Dirección de usuario eliminada exitosamente
 *       404:
 *         description: Dirección de usuario no encontrada
 *       400:
 *         description: Error al eliminar la dirección de usuario
 */
router_direccion_usuario.delete('/direcciones_usuario/:id', direccionUsuarioController.delete);

module.exports = router_direccion_usuario;