const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = require('./index.js');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});