
express = require('express')
const router = express.Router()
const plantsController = require('../controllers/plantsController'); 



router.get('', (req, res) => {
    plantsController.getPlants((error, plants) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(plants)
    });
});


router.get('/cherry', (req, res) => {
    
})



module.exports = router