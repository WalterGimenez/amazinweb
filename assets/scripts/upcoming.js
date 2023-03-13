const cardList = document.getElementById('list-card');
const checkboxes = document.querySelectorAll(".form-check-input");
const input = document.getElementById('input-w');
const link_pressed = document.getElementById('pressed')
const listCategories = document.getElementById('catego')

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

//seeing how many categorys there are.
let onlyCategories = data.events.reduce(function(categories, event) {
    if (!categories.includes(event.category)) {
        categories.push(event.category);
    }
    return categories;
    }, []);

//showing categories
byCategories(onlyCategories)

function byCategories(dataCategory){
    let oneCategory = ""
    for (const categ of dataCategory) {
        oneCategory+=`<div class="form-check line book">
        <input class="form-check-input" type="checkbox" value="${categ}" id="${categ}">
        <label class="form-check-label" for="${categ}">
            ${categ}
        </label>
    </div>` 
    }
    listCategories.innerHTML = oneCategory
}

//seeing categories
listCategories
.addEventListener('change', function(event) {
    if (event.target.classList.contains('form-check-input')) {
        const checkedValues = Array.from(listCategories
        .querySelectorAll('.form-check-input:checked')).map(checkbox => checkbox.value);
    }
});



//capturing id
function viewDetailCard(id){
    window.location.href = `./detail.html?id=${id}`//send id for detail.html
}

function filterData() {
    let searchValue = input.value.toLowerCase();
    let selectedCategories = Array.from(listCategories.querySelectorAll('.form-check-input:checked')).map(checkbox => checkbox.value);

    filteredData = cardListUp.filter(event => {
        return event.name.toLowerCase().includes(searchValue) || event.description.toLowerCase().includes(searchValue);
    }).filter(event => {
        if (selectedCategories.length == 0) {
            return true; // if no categories selected, show all cards
        } else {
            return selectedCategories.includes(event.category);
        }
    });
}


function filterByCategory() {
    let searchValue = input.value.toLowerCase();
    let selectedCategories = Array.from(listCategories.querySelectorAll('.form-check-input:checked')).map(checkbox => checkbox.value);
    
    filteredData = cardListUp.filter(event => {
        return event.name.toLowerCase().includes(searchValue) || event.description.toLowerCase().includes(searchValue);
    }).filter(event => {
        if (selectedCategories.length == 0) {
            return true; // if no categories are selected, show me all cards
        } else {
            
            return selectedCategories.includes(event.category);
        }
    });
    
    if (filteredData.length == 0) {
        const notFound = "Cards no found, please try with another word";
        cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
        <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
    } else {
        cardsUp(filteredData);
    }
}


listCategories.addEventListener('change', function(event) {
    if (event.target.classList.contains('form-check-input')) {
        filterData();
        if (filteredData.length == 0) {
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
        } else {
            cardsUp(filteredData);
        }
    }
});

input.addEventListener('keypress', function(event) { 
    if (event.key === "Enter") {
        filterData();
        if (filteredData.length == 0) {
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
        } else {
            cardsUp(filteredData);
        }
    }
});

link_pressed.addEventListener('click', function(event) {
    event.preventDefault();
    filterData();
    if (filteredData.length == 0) {
        const notFound = "Cards no found, please try with another word";
        cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
        <a href="./upcoming.html" class="btn btn-primary" id="no-foundC">Return</a>`
    } else {
        cardsUp(filteredData);
    }
});


checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        console.log(checkbox.value);
        filterData();
        cardsUp(filteredData);
    });
});

// Initial display of all cards
cardsUp(cardListUp);