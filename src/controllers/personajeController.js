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
    console.log('result: ', result);
    res.json({id: result.insert_id, message: 'Personaje creado exitosamente'})
  } catch (error) {
    console.error('Error al insertar personaje: ' + error.message);
    res.status(500).json({error: 'Error al insertar personaje'});
  }
}

module.exports = {
  listPersonajes,
  crearPersonaje
};
