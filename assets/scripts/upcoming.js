const cardListUp = document.getElementById('list-card')

function cardsUp(data){
    cardListUp.innerHTML = ""
    data.forEach(event => {
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
    });
}
const filterUp = data.events.filter(date => date.date > data.currentDate)
cardsUp(filterUp)


const input = document.getElementById('input-w')
const link = document.querySelector('#inputseaarch');  

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        const input = document.getElementById('input-w')
        if(input.value === "" ){
            input.value = "Cinema";
        }
        const byCategory = filterUp.filter(category => category.category === input.value)
        cardsUp(byCategory)
    }
})

link.addEventListener('click', (event) =>{
    event.preventDefault();
    const input = document.getElementById('input-w')
    if(input.value === "" ){
        input.value = "Cinema";
    }
    const byCategory = filterUp.filter(category => category.category === input.value)
    cardsUp(byCategory)
});