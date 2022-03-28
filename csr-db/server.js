const express = require("express")
const app = express()
const path = require("path")
const {Sequelize, DataTypes} = require('sequelize')

app.use(express.json())

const database = new Sequelize("postgres://irfanmasudi:irfanmasudi@localhost:5432/hypermedia")

async function initializeDatabaseConnection(){
    await database.authenticate()
    const cat = database.define("cat", {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING
    })
    await database.sync({force: true})
    return {
        cat
    }
}

async function startApplicationServer(){
    const models = await initializeDatabaseConnection()
    models.cat.create({
        name : "Ardi",
        breed: "Sejenis",
        img: "img/brown.jpeg"
    })

    app.get("/api/cats", async (req, res)=>{
        const catList = await models.cat.findAll()
        return res.json(catList)
    })
    
    app.post("/api/cats", (req, res)=>{
        const {body} = req
        catList.push(body)
        return res.sendStatus(200)
    })
}

/*

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
*/

///API


app.use(express.static(path.join(__dirname,"client")))

app.listen(3000,()=>{
    console.log("Server running on port 3000")
    startApplicationServer()
})