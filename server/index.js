

const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8080
// const userRouter = require('./routes/UserRouts')
const plantRouter = require('./routes/plantRouts')

//current plant data
const { largeTomatoes, smallTomatoes, peppersData } = require('./plant_data')

app.use(cors())

app.use('/plants', plantRouter);

app.get("/api/tomato/large", (req, res) => {
    res.json({largeTomatoes})
})

app.get("/api/tomato/small", (req, res) => {
    res.json({smallTomatoes})
})

app.get("/api/pepper", (req, res) => {
    res.json({peppersData})
})


app.listen(PORT, () => {
    console.log(`Jarvis is live at ${PORT}`)
})


