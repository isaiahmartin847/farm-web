

const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
// const router = express.Router();
const app = express()
const PORT = 8080
const { largeTomatoes, smallTomatoes, peppersData } = require('./plant_data')



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_cart'
}); 


connection.connect((err) => {
    if (err) {
        console.error(`error connections to the database failed ${err.stack}`)
    }
    console.log(`connected to the server id ${connection.threadId}`)
});

// this exports the database 
// module.exports = connection;


app.use(cors())

app.get("/api/tomato/large", (req, res) => {
    res.json({largeTomatoes})
})

app.get("/api/tomato/small", (req, res) => {
    res.json({smallTomatoes})
})

app.get("/api/pepper", (req, res) => {
    res.json({peppersData})
})

app.get('/users', (req, res) => {
    // Example query to retrieve users from MySQL
    connection.query('SELECT * FROM Users', (err, results) => {
        console.log(results)
        if (err) {
            console.log(results)
            console.log('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Jarvis is live at ${PORT}`)
})

