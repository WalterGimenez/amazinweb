const cardListUp = document.getElementById('list-card')

data.events.forEach(event => {
    if(data.currentDate < event.date){
        cardListUp.innerHTML +=
    `<div class="card cardmarg cardsize">
        <img src="${event.image}" class="card-img-top imgcard" alt="...">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
        </div>
        <div class="card-footer">
        <p class="pinline">Price $${event.price}</p>
            <a href="./detail.html" class="btn btn-primary">More info..</a>
        </div>
    </div>`
    }
});