// filepath: /c:/Users/crist/Documents/dev-personal/forks/PickHealthyBack/src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PickHealthyBack API',
      version: '1.0.0',
      description: 'Documentación de la API de PickHealthyBack',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia esto a la URL de tu servidor
      },
      {
        url: 'https://yummiback-5ea8271858ed.herokuapp.com/', // Cambia esto a la URL de tu servidor
      },
    ],
  },
  apis: [
    './src/routes/*.js', // Ruta a los archivos de rutas
  ],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};