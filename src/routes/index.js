const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

// Ruta para listar personajes
router.get('/personajes', personajeController.listPersonajes);
router.post('/crearPersonaje', personajeController.crearPersonaje);
router.put('/editarPersonaje/:id', personajeController.editarPersonaje);

module.exports = router;