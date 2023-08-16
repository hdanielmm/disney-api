const sequelize = require('../config/database');
const { Op } = require('sequelize');
const dbConnection = require('../config/database');
const Personaje = require('../models/Personaje');
const PersonajePorPelicula = require('../models/PersonajePorPelicula');
const PeliculaSerie = require('../models/PeliculaSerie');

async function listarPeliculasSeries(req, res) {
  try {
    const peliculasSeries = await PeliculaSerie.findAll();

    // Mapear los resultados para incluir el campo de endpoint
    const listaPeliculasSeries = peliculasSeries.map(peliculaSerie => ({
      imagen: peliculaSerie.Imagen,
      titulo: peliculaSerie.Titulo,
      fechaCreacion: peliculaSerie.FechaCreacion,
      endpoint: `/personajes/${peliculaSerie.PeliculaSerieID}`
    }));

    res.json(listaPeliculasSeries);
  } catch (error) {
    console.error('Error al listar PeliculasSeries:', error);
    res.status(500).json({ error: 'Error al listar PeliculasSeries' });
  }
}

async function crearPeliculaSerie(req, res) {
  const { Imagen, Titulo, FechaCreacion, Calificacion } = req.body;

  try {
    const nuevaPeliculaSerie = await PeliculaSerie.create({
      Imagen, Titulo, FechaCreacion, Calificacion
    });

    res.json({ id: nuevaPeliculaSerie.id, message: 'PeliculaSerie creada exitosamente' });
  } catch (error) {
    console.error('Error al crear peliculaSerie:', error);
    res.status(500).json({ error: 'Error al crear peliculaSerie' });
  }
}

module.exports = {
  listarPeliculasSeries,
  crearPeliculaSerie
};
