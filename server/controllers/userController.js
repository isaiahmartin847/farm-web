// controllers/userController.js
const db = require('../db/connection');

function getUsers(callback) {
  db.query('SELECT * FROM Users', (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      callback('Error fetching users', null);
      return;
    }
    callback(null, results);
  });
}

module.exports = {
  getUsers
};
