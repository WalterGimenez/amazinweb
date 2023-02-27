const cardList = document.getElementById('list-card')

let dataEvents =  data.events

function showData(){
    for (const dataCard of dataEvents) {
        cardList.innerHTML += `<div class="card cardmarg cardsize">
        <img src="${dataCard.image}" class="card-img-top imgcard" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dataCard.name}</h5>
            <p class="card-text">${dataCard.description}</p>
        </div>
        <div class="card-body">
            <p class="pinline">Price $${dataCard.price}</p>
            <a href="./detail.html" class="btn btn-primary">More info..</a>
        </div>
    </div>`
    }
}

showData()