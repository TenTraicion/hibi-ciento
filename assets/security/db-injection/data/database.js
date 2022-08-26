const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  uri: 'localhost:3306',
  database: 'security',
  user: 'root',
  password: 'Amijanina@97',
})

module.exports = pool;