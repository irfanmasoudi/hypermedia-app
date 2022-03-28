const express = require("express")
const app = express()

const path = require("path")

app.use(express.json())

function createCatTemplate(name, breed, img){
    return `<div class="card">
                <div class="img-container">
                    <img src="${img}">
                </div>
                <span class="cat-name">Nama: ${name}</span>
                <span class="cat-breed">Jenis: ${breed}</span>
            </div>`
}

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

app.get("/", (req, res)=> {
    let catString = ""
    for(const cat of catList){
        catString += createCatTemplate(cat.name, cat.breed, cat.img)
    }
    return res.send(`
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Web Kucings</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
</head>
<body>
    <header>
        <h1 id="tittle">Kucing Oh Kucing!</h1>
    </header>
    <main>
        <div class="custom-form">
            <input placeholder="Nama" type="text" id="name">
            <input placeholder="Jenis" type="text" id="breed">
            <input placeholder="ImageURL" type="text" id="img">
            <button onclick="parseInput()">Save</button>
          </div>
        <div id="container">
        ${catString}
        </div>
    </main>
    <footer>

    </footer>
</body>
<script type="text/javascript" src="main.js"></script>
</html>
    `)
})

app.use(express.static(path.join(__dirname,"client")))

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})