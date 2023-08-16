const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// const dbConnection = require('./src/config/database');

// Configuración de la base de datos y modelo
const sequelize = require('./src/config/database');
require('./src/models/Personaje');
require('./src/models/PeliculaSerie');

app.use(express.json());

// Rutas
const indexRoutes = require('./src/routes/index');
app.use('/', indexRoutes);

// Sincronizar modelo con la base de datos
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
}).catch(err => {
  console.error('Error al sincronizar la base de datos:', err);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});