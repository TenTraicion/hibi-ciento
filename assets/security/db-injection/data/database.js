const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  uri: 'localhost',
  database: 'security',
  user: 'root',
  password: 'Amijanina@97',
  multipleStatements: true
})

module.exports = pool;