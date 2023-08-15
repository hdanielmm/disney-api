const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'disney_db',
  port: 3306
});

module.exports = connection.promise();