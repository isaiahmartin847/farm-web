// db/connection.js
const mysql = require('mysql');
require("dotenv").config()


// Create a MySQL pool
const pool = mysql.createPool({
  connectionLimit: 100, 
  host: 'localhost',
  user: 'root',
  password: process.env.mysql_password,
  database: 'test_cart'
});

// Export the pool to be used in other modules
module.exports = pool;