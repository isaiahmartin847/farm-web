const db = require('../db/connection');



const getPlants = (callback) => {
    db.query('SELECT * FROM plantData', (error, results) => {
        if (error) {
            callback('error acured during query', null)
            return
        }
        callback(null,  results)
    });
};


module.exports = { 
    getPlants
}