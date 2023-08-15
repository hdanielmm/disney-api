const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const dbConnection = require('./config/database');

// Middlewares, rutas, etc.

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});