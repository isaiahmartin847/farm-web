// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a route to get users
router.get('/users', (req, res) => {
  userController.getUsers((error, users) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(users);
  });
});

module.exports = router;