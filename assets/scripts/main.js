
const cardList = document.getElementById('list-card');
const checkboxes = document.querySelectorAll(".form-check-input");
const input = document.getElementById('input-w');
const link_pressed = document.getElementById('pressed')

let allData = data.events;
let filteredData = allData;

function allCards(data){
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

function filterData() {
    let searchValue = input.value.toLowerCase()
    filteredData = allData.filter(event =>
        event.name.toLowerCase().includes(searchValue) || event.description.toLowerCase().includes(searchValue)
    );
}

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        filterData();
        if(filteredData.length === 0){
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
        }else{
            allCards(filteredData);
        }
        
    }
});


link_pressed.addEventListener('click', function(event){ //i must to call <a> in DOM, carefully!!!!
    event.preventDefault(); // prevenir comportamiento por defecto del enlace
    filterData();
    if(filteredData.length === 0){
        const notFound = "Cards no found, please try with another word";
        cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
        <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
    }else{
        allCards(filteredData);
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
            <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
        } else {
            const filteredCheckboxes = Array.from(checkboxes).filter(function(value) {
                return selectedValuesChecks.includes(value.value)
            });
            filteredData = filteredData.filter(function(event) {
                return filteredCheckboxes.map(function(checkbox) {
                    return checkbox.value;
                }).includes(event.category)
            });
            allCards(filteredData);
        }
    });
});

// Initial display of all cards
allCards(allData);

