const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*Developer123",
    database: "test_cart"
})


db.connect(err => {
    if(err){
        console.error("Unable to connect to the database", err)
    } else {
        console.log("connected to the data base")
    }

})



module.exports = db;