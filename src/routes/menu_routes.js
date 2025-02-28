const express = require('express');
const router_menu = express.Router();
const menuController = require('../controllers/menu_controller');

/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Gestión del menú
 */

/**
 * @swagger
 * /api/menu:
 *   post:
 *     summary: Crear un nuevo ítem en el menú
 *     tags: [Menu]
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
 *               precio:
 *                 type: number
 *                 format: double
 *               imagen_url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ítem del menú creado exitosamente
 *       400:
 *         description: Error al crear el ítem del menú
 */
router_menu.post('/menu', menuController.create);

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Obtener todos los ítems del menú
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: Lista de ítems del menú
 *       400:
 *         description: Error al obtener los ítems del menú
 */
router_menu.get('/menu', menuController.findAll);

/**
 * @swagger
 * /api/menu/{id}:
 *   get:
 *     summary: Obtener un ítem del menú por ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del ítem del menú
 *     responses:
 *       200:
 *         description: Ítem del menú encontrado
 *       404:
 *         description: Ítem del menú no encontrado
 *       400:
 *         description: Error al obtener el ítem del menú
 */
router_menu.get('/menu/:id', menuController.findOne);

/**
 * @swagger
 * /api/menu/{id}:
 *   put:
 *     summary: Actualizar un ítem del menú por ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del ítem del menú
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
 *               precio:
 *                 type: number
 *                 format: double
 *               imagen_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ítem del menú actualizado exitosamente
 *       404:
 *         description: Ítem del menú no encontrado
 *       400:
 *         description: Error al actualizar el ítem del menú
 */
router_menu.put('/menu/:id', menuController.update);

/**
 * @swagger
 * /api/menu/{id}:
 *   delete:
 *     summary: Eliminar un ítem del menú por ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del ítem del menú
 *     responses:
 *       204:
 *         description: Ítem del menú eliminado exitosamente
 *       404:
 *         description: Ítem del menú no encontrado
 *       400:
 *         description: Error al eliminar el ítem del menú
 */
router_menu.delete('/menu/:id', menuController.delete);

module.exports = router_menu;