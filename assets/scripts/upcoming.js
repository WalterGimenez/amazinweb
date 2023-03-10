const cardList = document.getElementById('list-card');
const checkboxes = document.querySelectorAll(".form-check-input");
const input = document.getElementById('input-w');
const link_pressed = document.getElementById('pressed')

let allData = data.events;
let cardListUp = allData.filter(date => date.date > data.currentDate)

function cardsUp(data){
    let html_page = "";
    for (const card of data) {
        html_page += `<div class="card cardmarg cardsize">
        <img src="${card.image}" class="card-img-top imgcard" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.description}</p>
        </div>
        <div class="card-footer">
            <p class="pinline">Price $${card.price}</p>
            <input type="button" onclick="viewDetailCard(${card._id})" class="btn btn-primary" value="More info..">
        </div>
    </div>`;
    }
    cardList.innerHTML = html_page;
}


//capturing id
function viewDetailCard(id){
    window.location.href = `./detail.html?id=${id}`//send id for detail.html
}

function filterData() {
    let searchValue = input.value.toLowerCase()
    cardListUp = cardListUp.filter(event =>
        event.name.toLowerCase().includes(searchValue) || event.description.toLowerCase().includes(searchValue)
    );
}

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        filterData();
        if(cardListUp.length === 0){
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
        }else{
            cardsUp(cardListUp);
        }
        
    }
});

link_pressed.addEventListener('click', function(event){ 
    event.preventDefault();
    filterData();
    if(cardListUp.length === 0){
        const notFound = "Cards no found, please try with another word";
        cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
        <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
    }else{
        cardsUp(cardListUp);
    }
});


checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        filterData();
        const selectedChecks = document.querySelectorAll(".form-check-input:checked");
        const selectedValuesChecks = Array.from(selectedChecks).map(function(checkbox) {
            return checkbox.value;
        });
        if (selectedValuesChecks.length === 0) {
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
        } else {
            const filteredCheckboxes = Array.from(checkboxes).filter(function(value) {
                return selectedValuesChecks.includes(value.value)
            });
            cardListUp = cardListUp.filter(function(event) {
                return filteredCheckboxes.map(function(checkbox) {
                    return checkbox.value;
                }).includes(event.category)
            });
            cardsUp(cardListUp);
        }
    });
});

// Initial display of cards
cardsUp(cardListUp);