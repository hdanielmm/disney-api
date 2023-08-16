const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PersonajePorPelicula = sequelize.define('PersonajePorPelicula', {
  PersonajePorPeliculaID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  PersonajesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Personajes', // Nombre de la tabla referenciada
      key: 'id'            // Clave primaria referenciada
    }
  },
  PeliculaSerieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'PeliculaSerie', // Nombre de la tabla referenciada
      key: 'PeliculaSerieID'  // Clave primaria referenciada
    }
  }
}, {
  timestamps: false, // Deshabilitar campos de timestamp automáticos
  tableName: 'PersonajePorPelicula' // Nombre real de la tabla en la base de datos
});

module.exports = PersonajePorPelicula;