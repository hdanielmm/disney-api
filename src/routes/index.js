const express = require('express');
const router = express.Router();
const dbConnection = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const [results, fields] = await dbConnection.promise().query('SELECT * FROM personaje');
    res.json(results);
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ error: 'Error en la consulta' });
  }
});

module.exports = router;