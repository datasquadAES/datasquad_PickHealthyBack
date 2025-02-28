const express = require('express');
const router_pago = express.Router();
const pagoController = require('../controllers/pago_controller');

/**
 * @swagger
 * tags:
 *   name: Pago
 *   description: Gestión de pagos
 */

/**
 * @swagger
 * /api/pagos:
 *   post:
 *     summary: Crear un nuevo pago
 *     tags: [Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               metodo_pago:
 *                 type: string
 *               cantidad:
 *                 type: number
 *                 format: float
 *               estado:
 *                 type: string
 *               transaccion_id:
 *                 type: string
 *               pedido_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pago creado exitosamente
 *       400:
 *         description: Error al crear el pago
 */
router_pago.post('/pagos', pagoController.create);

/**
 * @swagger
 * /api/pagos:
 *   get:
 *     summary: Obtener todos los pagos
 *     tags: [Pago]
 *     responses:
 *       200:
 *         description: Lista de pagos
 *       400:
 *         description: Error al obtener los pagos
 */
router_pago.get('/pagos', pagoController.findAll);

/**
 * @swagger
 * /api/pagos/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Pago encontrado
 *       404:
 *         description: Pago no encontrado
 *       400:
 *         description: Error al obtener el pago
 */
router_pago.get('/pagos/:id', pagoController.findOne);

/**
 * @swagger
 * /api/pagos/{id}:
 *   put:
 *     summary: Actualizar un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               metodo_pago:
 *                 type: string
 *               cantidad:
 *                 type: number
 *                 format: float
 *               estado:
 *                 type: string
 *               transaccion_id:
 *                 type: string
 *               pedido_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamente
 *       404:
 *         description: Pago no encontrado
 *       400:
 *         description: Error al actualizar el pago
 */
router_pago.put('/pagos/:id', pagoController.update);

/**
 * @swagger
 * /api/pagos/{id}:
 *   delete:
 *     summary: Eliminar un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       204:
 *         description: Pago eliminado exitosamente
 *       404:
 *         description: Pago no encontrado
 *       400:
 *         description: Error al eliminar el pago
 */
router_pago.delete('/pagos/:id', pagoController.delete);

module.exports = router_pago;