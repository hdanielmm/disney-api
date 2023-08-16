const sequelize = require('../config/database');
const dbConnection = require('../config/database');
const Personaje = require('../models/Personaje');

async function listarPersonajes(req, res) {
  try {
    const personajes = await Personaje.findAll();

    // Mapear los resultados para incluir el campo de endpoint
    const listaPersonajes = personajes.map(personaje => ({
      nombre: personaje.nombre,
      imagen: personaje.imagen,
      endpoint: `/personajes/${personaje.id}`
    }));

    res.json(listaPersonajes);
  } catch (error) {
    console.error('Error al listar personajes:', error);
    res.status(500).json({ error: 'Error al listar personajes' });
  }
}

async function crearPersonaje(req, res) {
  const { nombre, imagen, edad, peso, historia } = req.body;

  try {
    const newCharacter = await Personaje.create({
      nombre,
      imagen,
      edad,
      peso,
      historia
    });

    res.json({ id: newCharacter.id, message: 'Personaje creado exitosamente' });
  } catch (error) {
    console.error('Error al crear personaje:', error);
    res.status(500).json({ error: 'Error al crear personaje' });
  }
}

const editarPersonaje = async(req, res) => {
  const personajeId = req.params.id;
  const {nombre, imagen, edad, peso, historia} = req.body;

  try {
    const [updatedRows] = await Personaje.update(
      { nombre, imagen, edad, peso, historia },
      { where: { id: personajeId } }
    );

    if (updatedRows > 0) {
      res.json({ message: 'Personaje actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar personaje:', error);
    res.status(500).json({ error: 'Error al actualizar personaje' });
  }
}

const eliminarPersonaje = async (req, res) =>{
  const personajeId = req.params.id; // Obtener el ID del personaje de los parámetros de la URL

  try {
    const eliminarPersonaje = await Personaje.destroy({
      where: { id: personajeId }
    });

    if (eliminarPersonaje) {
      res.json({ message: 'Personaje eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar personaje:', error);
    res.status(500).json({ error: 'Error al eliminar personaje' });
  }
}

const detallePersonaje = async (req, res) => {
  try {
    const [results] = await sequelize.query("SELECT per.nombre, per.imagen, per.edad, per.peso, per.historia, pel.Titulo FROM Personajes per INNER JOIN PersonajePorPelicula pepe ON per.id = pepe.PersonajesId INNER JOIN PeliculaSerie pel ON pel.PeliculaSerieID = pepe.PeliculaSerieId;");
    console.log(results);
    res.json(results)
  } catch (error) {
    console.error({'messge': 'Error al consultar los detalles del personaje' + error});
    res.status(500).json({'error': 'Error al consultar los detalles del personaje'})
  }
}


module.exports = {
  listarPersonajes,
  crearPersonaje,
  editarPersonaje,
  eliminarPersonaje,
  detallePersonaje,
};
