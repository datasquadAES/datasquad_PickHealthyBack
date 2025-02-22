const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de la conexión a PostgreSQL
const sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para conexiones SSL en Heroku
    },
  },
  logging: false, // Desactiva los logs de Sequelize (opcional)
});

// Probar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

/**
 * Función para probar la conexión a la base de datos PostgreSQL
 */
async function probarConexion() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos PostgreSQL ha sido establecida exitosamente.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos PostgreSQL:', error);
  }
}

module.exports = { sequelize, probarConexion };