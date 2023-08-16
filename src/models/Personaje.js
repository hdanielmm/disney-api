const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Personaje = sequelize.define('Personaje', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  peso: DataTypes.FLOAT,
  historia: DataTypes.TEXT
}, {
  paranoid: true // Habilita la eliminación suave (soft delete)
});

module.exports = Personaje;
