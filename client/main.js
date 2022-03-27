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



for (let cat of catList){
    container.innerHTML += createCatTemplate(cat.name, cat.breed, cat.img)
}

function parseInput(){
    const boxName = document.getElementById("name")
    const boxBreed = document.getElementById("breed")
    const boxImg = document.getElementById("img")
    const nameValue = boxName.value
    const breedValue = boxBreed.value
    const imgValue = boxImg.value

    container.innerHTML += createCatTemplate(nameValue, breedValue, imgValue)

}
