const cardListUp = document.getElementById('list-card')

for (const dataCard of data.events) {
    if(data.currentDate < dataCard.date){
        cardListUp.innerHTML += `<div class="card cardmarg cardsize">
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