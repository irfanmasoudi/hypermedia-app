const tittle = document.getElementById("tittle")
//const tittle_content = tittle.innerHTML
tittle.innerHTML = "Daftar Hadir Kucing"

const container = document.getElementById('container')
//container.innerHTML = "Test"


function createCatTemplate(name, breed, img){
    return `<div class="card">
                <div class="img-container">
                    <img src="${img}">
                </div>
                <span class="cat-name">Nama: ${name}</span>
                <span class="cat-breed">Jenis: ${breed}</span>
            </div>`
}

async function requestCats(){
    const data = await fetch("http://localhost:3000/api/cats")
    const arrayOfCats = await data.json()

    console.log(arrayOfCats)

    for (let cat of arrayOfCats){
        container.innerHTML += createCatTemplate(cat.name, cat.breed, cat.img)
    }
    
}

requestCats()


async function parseInput(){
    const boxName = document.getElementById("name")
    const boxBreed = document.getElementById("breed")
    const boxImg = document.getElementById("img")
    const nameValue = boxName.value
    const breedValue = boxBreed.value
    const imgValue = boxImg.value

    const payload = {
        name : nameValue,
        breed : breedValue,
        img : imgValue
    }

    await fetch("http://localhost:3000/api/cats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(payload)
    })

    //container.innerHTML += createCatTemplate(nameValue, breedValue, imgValue)

}
