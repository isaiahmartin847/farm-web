const db = require('../db/connection');



const getPlants = (callback) => {
    db.query('SELECT * FROM plantData WHERE in_stock = 1', (error, results) => {
        if (error) {
            callback(500, 'error acured during query')
            return
        }
        callback(null,  results)
    });
};

const getCherryTomatoes = (callback) => {
    db.query('SELECT * FROM plantData WHERE species = "tomato" AND in_stock = 1 AND type = "cherry"', (error, result) => {
        if(error) {
            callback(500, 'not able to get the cherry tomatoes')
            console.log("was not able to find data")
            return
        }
        callback(null, result)
    });
};



module.exports = { 
    getPlants,
    getCherryTomatoes
}