
express = require('express')
const router = express.Router()
const plantsController = require('../controllers/plantsController'); 
// const router = require('./UserRouts');


router.get('', (req, res) => {
    plantsController.getPlants((error, plants) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(plants)
    });
});



module.exports = router