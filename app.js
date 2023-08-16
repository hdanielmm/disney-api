const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const dbConnection = require('./src/config/database');

app.use(express.json());
// Rutas
const indexRoutes = require('./src/routes/index');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});