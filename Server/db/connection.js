// db/connection.js
const mysql = require('mysql');

// Create a MySQL pool
const pool = mysql.createPool({
  connectionLimit: 100, 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_cart'
});

// Export the pool to be used in other modules
module.exports = pool;