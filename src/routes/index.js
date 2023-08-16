const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

// Ruta para listar personajes
router.get('/personajes', personajeController.listarPersonajes);
router.post('/crearPersonaje', personajeController.crearPersonaje);
router.put('/editarPersonaje/:id', personajeController.editarPersonaje);
router.delete('/eliminarPersonaje/:id', personajeController.eliminarPersonaje);
router.get('/detallePersonaje', personajeController.detallePersonaje);


module.exports = router;