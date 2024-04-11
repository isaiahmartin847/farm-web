const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8080
const price = 4


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


app.listen(PORT, () => {
    console.log(`Jarvis is live at ${PORT}`)
})



const largeTomatoes = [
    {
        id: crypto.randomUUID(),
        name: "Early Girl",
        price: price,
        url: "https://seedsnsuch.com/products/new-girl-hybrid-tomato-seeds",
        color: "Yellow",
        colorCode: "bg-yellow-400"
    },
    {
        id: crypto.randomUUID(),
        name: "Cosmonaut",
        price: price,
        url: "https://en.wikipedia.org/wiki/Tomato",
        color: "Baby Blue",
        colorCode: "bg-blue-200"
    },
    {
        id: crypto.randomUUID(),
        name: "Bobcat",
        price: price,
        url: "https://territorialseed.com/products/tomato-bobcat#erid2184679",
        color: "Pale Green",
        colorCode: "bg-green-300"
    },
    {
        id: crypto.randomUUID(),
        name: "Moskvich",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/moskvich-organic-tomato-seed-756.html",
        color: "Green Ruffled",
        colorCode: "bg-green-600"

    },
    {
        id: crypto.randomUUID(),
        name: "Pink Bereley",
        price: price,
        url: "https://www.fedcoseeds.com/seeds/pink-berkeley-tie-dye-organic-slicing-tomato-4041",
        color: "Red Square",
        colorCode: "bg-red-500"
    }
]

const smallTomatoes = [
    {
        id: crypto.randomUUID(),
        name: "Large Red Cherry",
        price: price,
        url: "https://www.totallytomato.com/product/T00424/82",
        color: "Ruffled Red",
        colorCode: "bg-red-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Pink Princess",
        price: price,
        url: "https://fedcoseeds.com/seeds/pink-princess-gene-pool-eco-small-fruited-tomato-4107",
        color: "Pink",
        colorCode: "bg-pink-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Fargo",
        price: price,
        url: "https://fedcoseeds.com/seeds/fargo-yellow-pear-organic-small-fruited-tomato-4122",
        color: "Black Square",
        colorCode: "bg-black"
    },
    {
        id: crypto.randomUUID(),
        name: "Sun Gold Cherry",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/tomatoes/cherry-tomatoes/sun-gold-f1-tomato-seed-770.html#q=sun%2Bgold&lang=en_US&start=1",
        color: "Blue",
        colorCode: "bg-blue-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Black Cherry",
        price: price,
        url: "https://www.fedcoseeds.com/seeds/black-cherry-organic-small-fruited-tomato-4115",
        color: "N/A",
        colorCode: ""
    },
    {
        id: crypto.randomUUID(),
        name: "Honeydrop",
        price: price,
        url: "https://fedcoseeds.com/seeds/honeydrop-organic-small-fruited-tomato-4106",
        color: "Green",
        colorCode: "bg-green-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Tropical Sunset",
        price: price,
        url: "https://fedcoseeds.com/seeds/tropical-sunset-organic-small-fruited-tomato-4035",
        color: "Marroon Ruffled",
        colorCode: "bg-red-700"
    },
     


]

const peppersData = [
    {
        id: crypto.randomUUID(),
        name: "Helios",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/peppers/hot-peppers/helios-f1-habanero-pepper-seed-3219.html",
        color: "Lime", 
        colorCode: "bg-lime-400"
    },
    {
        id: crypto.randomUUID(),
        name: "Thai",
        price: price,
        url: "https://www.fedcoseeds.com/seeds/thai-hot-organic-hot-pepper-3860",
        color: "Gold", 
        colorCode: "bg-yellow-400"
    },
    {
        id: crypto.randomUUID(),
        name: "Hungarian",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/peppers/hot-peppers/hungarian-hot-wax-organic-pepper-seed-585G.html",
        color: "Silver", 
        colorCode: "bg-slate-300"
    },
    {
        id: crypto.randomUUID(),
        name: "Jalapeño",
        price: price,
        url: "https://www.fedcoseeds.com/seeds/early-jalapeno-hot-pepper-3834",
        color: "Red", 
        colorCode: "bg-red-600"
    },
    {
        id: crypto.randomUUID(),
        name: "Anaheim",
        price: price,
        url: "https://www.fedcoseeds.com/seeds/anaheim-hot-pepper-3807",
        color: "Blue", 
        colorCode: "bg-blue-500"
    },
    {
        id: crypto.randomUUID(),
        name: "New Ace",
        price: price,
        url: "https://www.harrisseeds.com/products/01648-pepper-new-ace-f1?variant=35441433051208",
        color: "Green", 
        colorCode: "bg-green-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Sweet Banana",
        price: price,
        url: "https://www.harrisseeds.com/products/00678-pepper-sweet-banana?variant=35441427284040",
        color: "Yellow", 
        colorCode: "bg-yellow-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Nikita",
        price: price,
        url: "https://tomatogrowers.com/products/nikita-hybrid?_pos=1&_sid=f337af698&_ss=r",
        color: "Baby blue", 
        colorCode: "bg-sky-300"
    },
    {
        id: crypto.randomUUID(),
        name: "Carmen",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/peppers/sweet-peppers/carmen-organic-f1-corno-di-toro-pepper-seed-2993G.html#q=carmen&lang=en_US&start=1",
        color: "Pastel purple", 
        colorCode: "bg-purple-300"
    },
    {
        id: crypto.randomUUID(),
        name: "XR3",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/peppers/sweet-bell-peppers/x3r-red-knight-f1-bell-pepper-seed-2309.html",
        color: "Red Square", 
        colorCode: "bg-red-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Baron",
        price: price,
        url: "https://www.johnnyseeds.com/vegetables/peppers/hot-peppers/baron-f1-poblano-pepper-seed-3672.html",
        color: "Pink", 
        colorCode: "bg-pink-500"
    },
    {
        id: crypto.randomUUID(),
        name: "Czech Black",
        price: price,
        url: "https://fedcoseeds.com/seeds/czech-black-organic-hot-pepper-3816",
        color: "Black", 
        colorCode: "bg-black"
    },
    {
        id: crypto.randomUUID(),
        name: "Purple Beauty",
        price: price,
        url: "https://fedcoseeds.com/seeds/purple-beauty-organic-sweet-bell-pepper-3723",
        color: "N/A", 
        colorCode: ""
    },
    {
        id: crypto.randomUUID(),
        name: "Carrot Bomb",
        price: price,
        url: "https://fedcoseeds.com/seeds/carrot-bomb-organic-hot-pepper-3825",
        color: "teal", 
        colorCode: "bg-teal-400"
    },
    {
        id: crypto.randomUUID(),
        name: "Serrano",
        price: price,
        url: "https://fedcoseeds.com/seeds/hidalgo-serrano-eco-hot-pepper-3838",
        color: "Purple", 
        colorCode: "bg-purple-500"
    },
]