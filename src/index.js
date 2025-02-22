// filepath: /c:/Users/crist/Documents/dev-personal/forks/PickHealthyBack/src/app.js

const express = require('express');
const app = express();
const { swaggerUi, specs } = require('./config/swagger');
const morgan = require('morgan'); // Importa morgan
const cors = require('cors'); // Importa el paquete cors

app.use(cors({ origin: true }));

// Otras configuraciones y middlewares
app.use(express.json());
app.use(morgan('dev')); // Configura morgan para mostrar las peticiones en la consola

// Rutas
const router_ciudad = require('./routes/ciudad_routes');
const router_pais = require('./routes/pais_routes');
const router_usuario = require('./routes/usuario_routes');
const router_tipo_usuario = require('./routes/tipo_usuario_routes');
const router_tipo_documento = require('./routes/tipo_documento_routes');
const router_direccion_usuario = require('./routes/direccion_usuario_routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', router_ciudad);
app.use('/api', router_pais);
app.use('/api', router_usuario);
app.use('/api', router_tipo_usuario);
app.use('/api', router_direccion_usuario);
app.use('/api', router_tipo_documento);

module.exports = app;