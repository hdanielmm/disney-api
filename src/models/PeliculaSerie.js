const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PeliculaSerie = sequelize.define('PeliculaSerie', {
  PeliculaSerieID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Imagen: {
    type: DataTypes.STRING(255)
  },
  Titulo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  FechaCreacion: {
    type: DataTypes.DATE
  },
  Calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
}, {
  timestamps: false, // Deshabilitar campos de timestamp automáticos
  tableName: 'PeliculaSerie' // Nombre real de la tabla en la base de datos
});

module.exports = PeliculaSerie;
