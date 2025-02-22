const express = require('express');
const router_tipo_documento = express.Router();
const tipoDocumentoController = require('../controllers/tipo_documento_controller');

/**
 * @swagger
 * tags:
 *   name: TipoDocumento
 *   description: Gestión de tipos de documento
 */

/**
 * @swagger
 * /api/tipos_documento:
 *   post:
 *     summary: Crear un nuevo tipo de documento
 *     tags: [TipoDocumento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               sigla:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de documento creado exitosamente
 *       400:
 *         description: Error al crear el tipo de documento
 */
router_tipo_documento.post('/tipos_documento', tipoDocumentoController.create);

/**
 * @swagger
 * /api/tipos_documento:
 *   get:
 *     summary: Obtener todos los tipos de documento
 *     tags: [TipoDocumento]
 *     responses:
 *       200:
 *         description: Lista de tipos de documento
 *       400:
 *         description: Error al obtener los tipos de documento
 */
router_tipo_documento.get('/tipos_documento', tipoDocumentoController.findAll);

/**
 * @swagger
 * /api/tipos_documento/{id}:
 *   get:
 *     summary: Obtener un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de documento
 *     responses:
 *       200:
 *         description: Tipo de documento encontrado
 *       404:
 *         description: Tipo de documento no encontrado
 *       400:
 *         description: Error al obtener el tipo de documento
 */
router_tipo_documento.get('/tipos_documento/:id', tipoDocumentoController.findOne);

/**
 * @swagger
 * /api/tipos_documento/{id}:
 *   put:
 *     summary: Actualizar un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               sigla:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de documento actualizado exitosamente
 *       404:
 *         description: Tipo de documento no encontrado
 *       400:
 *         description: Error al actualizar el tipo de documento
 */
router_tipo_documento.put('/tipos_documento/:id', tipoDocumentoController.update);

/**
 * @swagger
 * /api/tipos_documento/{id}:
 *   delete:
 *     summary: Eliminar un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de documento
 *     responses:
 *       204:
 *         description: Tipo de documento eliminado exitosamente
 *       404:
 *         description: Tipo de documento no encontrado
 *       400:
 *         description: Error al eliminar el tipo de documento
 */
router_tipo_documento.delete('/tipos_documento/:id', tipoDocumentoController.delete);

module.exports = router_tipo_documento;