const express = require('express');
const router_ciudad = express.Router();
const ciudadController = require('../controllers/ciudad_controller');

/**
 * @swagger
 * tags:
 *   name: Ciudad
 *   description: Gestión de ciudades
 */

/**
 * @swagger
 * /api/ciudades:
 *   post:
 *     summary: Crear una nueva ciudad
 *     tags: [Ciudad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               id_pais:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ciudad creada exitosamente
 *       400:
 *         description: Error al crear la ciudad
 */
router_ciudad.post('/ciudades', ciudadController.create);

/**
 * @swagger
 * /api/ciudades:
 *   get:
 *     summary: Obtener todas las ciudades
 *     tags: [Ciudad]
 *     responses:
 *       200:
 *         description: Lista de ciudades
 *       400:
 *         description: Error al obtener las ciudades
 */
router_ciudad.get('/ciudades', ciudadController.findAll);

/**
 * @swagger
 * /api/ciudades/{id}:
 *   get:
 *     summary: Obtener una ciudad por ID
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad
 *     responses:
 *       200:
 *         description: Ciudad encontrada
 *       404:
 *         description: Ciudad no encontrada
 *       400:
 *         description: Error al obtener la ciudad
 */
router_ciudad.get('/ciudades/:id', ciudadController.findOne);

/**
 * @swagger
 * /api/ciudades/{id}:
 *   put:
 *     summary: Actualizar una ciudad por ID
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               id_pais:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ciudad actualizada exitosamente
 *       404:
 *         description: Ciudad no encontrada
 *       400:
 *         description: Error al actualizar la ciudad
 */
router_ciudad.put('/ciudades/:id', ciudadController.update);

/**
 * @swagger
 * /api/ciudades/{id}:
 *   delete:
 *     summary: Eliminar una ciudad por ID
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad
 *     responses:
 *       204:
 *         description: Ciudad eliminada exitosamente
 *       404:
 *         description: Ciudad no encontrada
 *       400:
 *         description: Error al eliminar la ciudad
 */
router_ciudad.delete('/ciudades/:id', ciudadController.delete);

module.exports = router_ciudad;