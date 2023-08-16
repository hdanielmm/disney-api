// const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'pass',
//   database: 'disney_db',
//   port: 3306
// });

const sequelize = new Sequelize('disney_db', 'root', 'pass', {
  host: 'localhost',   // Si estás utilizando Docker en Windows o macOS, usa la IP de la máquina host (por ejemplo, '192.168.99.100')
  dialect: 'mysql',
  port: 3306,
});

// module.exports = connection.promise();
module.exports = sequelize;