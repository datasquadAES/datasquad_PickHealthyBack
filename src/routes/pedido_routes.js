// Javascript
const express = require('express');
const router_pedido = express.Router();
const pedidoController = require('../controllers/pedido_controller');

/**
 * @swagger
 * tags:
 *   name: Pedido
 *   description: Gestión de pedidos
 */

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente
 *       400:
 *         description: Error al crear el pedido
 */
router_pedido.post('/pedidos', pedidoController.create);

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       400:
 *         description: Error al obtener los pedidos
 */
router_pedido.get('/pedidos', pedidoController.findAll);

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Obtener todos los pedidos segun parametros del body
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       400:
 *         description: Error al obtener los pedidos
 */
router_pedido.get('/pedido', pedidoController.find);

/**
 * @swagger
 * /api/pedidos/{id}:
 *   get:
 *     summary: Obtener un pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido no encontrado
 *       400:
 *         description: Error al obtener el pedido
 */
router_pedido.get('/pedidos/:id', pedidoController.findOne);

/**
 * @swagger
 * /api/pedidos/{id}:
 *   put:
 *     summary: Actualizar un pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               fecha_pedido:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pedido actualizado exitosamente
 *       404:
 *         description: Pedido no encontrado
 *       400:
 *         description: Error al actualizar el pedido
 */
router_pedido.put('/pedidos/:id', pedidoController.update);

/**
 * @swagger
 * /api/pedidos/{id}:
 *   delete:
 *     summary: Eliminar un pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       204:
 *         description: Pedido eliminado exitosamente
 *       404:
 *         description: Pedido no encontrado
 *       400:
 *         description: Error al eliminar el pedido
 */
router_pedido.delete('/pedidos/:id', pedidoController.delete);

module.exports = router_pedido;