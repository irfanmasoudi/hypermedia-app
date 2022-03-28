const express = require("express")
const app = express()

const path = require("path")

app.use(express.json())

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

app.get("/api/cats", (req, res)=>{
    return res.json(catList)
})

app.post("/api/cats", (req, res)=>{
    const {body} = req
    catList.push(body)
    return res.sendStatus(200)
})

app.use(express.static(path.join(__dirname,"client")))

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})