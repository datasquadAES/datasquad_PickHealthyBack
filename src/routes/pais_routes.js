const express = require('express');
const router_pais = express.Router();
const paisController = require('../controllers/pais_controller');

/**
 * @swagger
 * tags:
 *   name: Pais
 *   description: Gestión de países
 */

/**
 * @swagger
 * /api/paises:
 *   post:
 *     summary: Crear un nuevo país
 *     tags: [Pais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: País creado exitosamente
 *       400:
 *         description: Error al crear el país
 */
router_pais.post('/paises', paisController.create);

/**
 * @swagger
 * /api/paises:
 *   get:
 *     summary: Obtener todos los países
 *     tags: [Pais]
 *     responses:
 *       200:
 *         description: Lista de países
 *       400:
 *         description: Error al obtener los países
 */
router_pais.get('/paises', paisController.findAll);

/**
 * @swagger
 * /api/paises/{id}:
 *   get:
 *     summary: Obtener un país por ID
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del país
 *     responses:
 *       200:
 *         description: País encontrado
 *       404:
 *         description: País no encontrado
 *       400:
 *         description: Error al obtener el país
 */
router_pais.get('/paises/:id', paisController.findOne);

/**
 * @swagger
 * /api/paises/{id}:
 *   put:
 *     summary: Actualizar un país por ID
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del país
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: País actualizado exitosamente
 *       404:
 *         description: País no encontrado
 *       400:
 *         description: Error al actualizar el país
 */
router_pais.put('/paises/:id', paisController.update);

/**
 * @swagger
 * /api/paises/{id}:
 *   delete:
 *     summary: Eliminar un país por ID
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del país
 *     responses:
 *       204:
 *         description: País eliminado exitosamente
 *       404:
 *         description: País no encontrado
 *       400:
 *         description: Error al eliminar el país
 */
router_pais.delete('/paises/:id', paisController.delete);

module.exports = router_pais;