const express = require("express")
const app = express()

const path = require("path")

app.use(express.static(path.join(__dirname,"client")))

const catList = [
    {
        name: "Hitam",
        breed: "Kampung",
        img: "img/black.jpeg"
    },
    {
        name: "Putih",
        breed: "Anggora",
        img: "img/white.jpeg"
    },
    {
        name: "Coklat",
        breed: "Yuhu",
        img: "img/brown.jpeg"
    }

]

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})