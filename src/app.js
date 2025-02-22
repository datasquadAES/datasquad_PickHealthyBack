const express = require('express');
const app = require('./index.js');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});