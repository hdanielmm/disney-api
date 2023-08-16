const dbConnection = require('../config/database');

async function listPersonajes(req, res) {
  try {
    const query = 'SELECT nombre, imagen from Personaje';
    const [results, fields] = await dbConnection.query(query);
    const personajesConEndpoint = results.map((personaje) => ({
      ...personaje,
    endpoint: `/personajes/`}));

    res.json(personajesConEndpoint);
  } catch (error) {
    console.error('Error al listar personajes:', error);
    res.status(500).json({ error: 'Error al listar personajes' });
  }
}

async function crearPersonaje(req, res) {
  const {imagen, nombre, edad, peso, historia} = req.body;
  
  try {
    const query = 'INSERT INTO Personaje (imagen, nombre, edad, peso, historia) VALUES (?, ?, ?, ?, ?)';
    const [result] = await dbConnection.query(query, [imagen, nombre, edad, peso, historia]);

    res.json({id: result.insert_id, message: 'Personaje creado exitosamente'})
  } catch (error) {
    console.error('Error al insertar personaje: ' + error.message);
    res.status(500).json({error: 'Error al insertar personaje'});
  }
}

const editarPersonaje = async(req, res) => {
  const personajeId = req.params.id;
  const {imagen, nombre, edad, peso, historia} = req.body;

  try {
    const query = 'UPDATE Personaje SET imagen = ?, nombre = ?, edad = ?, peso = ?, historia = ? WHERE PersonajeID = ?'
    const [result] = await dbConnection.query(query, [imagen, nombre, edad, peso, historia, personajeId]);
console.log(result);
    res.json({id: result.updated_id, message: 'Personaje actualizado exitosamente'});
  } catch (error) {
    console.error('Error al actualizar personaje:', error);
    res.status(500).json({ error: 'Error al actualizar personaje' });
  }
}

module.exports = {
  listPersonajes,
  crearPersonaje,
  editarPersonaje,
};
