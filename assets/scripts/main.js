const cardList = document.getElementById('list-card')


function allCards(data){
    let html_page = ""
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
    </div>`
        
    }
    cardList.innerHTML = html_page;
}

//capturing id
function viewDetailCard(id){
    window.location.href = `./detail.html?id=${id}`//send id for detail.html
}

/*fished show cards */


let allData = data.events;
allCards(allData);

const input = document.getElementById('input-w')
const link = document.querySelector('#inputseaarch');  

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        const input = document.getElementById('input-w')
        const arrayEvents = data.events
        if(input.value === "" ){
            input.value = "Cinema";
            const byCategory = arrayEvents.filter(category => category.category.toLowerCase()  === input.value.toLowerCase())
            // console.log(byCategory)
            allCards(byCategory)
        }else{
            const specialCategory = arrayEvents.filter(event =>
                    event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
                )
                
            // console.log(specialCategory);
            if(specialCategory.length === 0){
                const notFound = "Cards no found, please try with another word";
                cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
                <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
            }else{
                allCards(specialCategory)
            }
            
        }
    }
})

link.addEventListener('click', (event) =>{
    event.preventDefault();
    const input = document.getElementById('input-w')
    const arrayEvents = data.events
    if(input.value === "" ){
        input.value = "Cinema";
        const byCategory = data.events.filter(category => category.category.toLowerCase() === input.value.toLowerCase())
        allCards(byCategory)
    }else{
        const specialCategory = arrayEvents.filter(event =>
            event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
        )
        if(specialCategory.length === 0){
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
        }else{
            allCards(specialCategory)
        }
    }
});

//by boxe's category checkboxs
const checkboxes = document.querySelectorAll(".form-check-input");

const arrayByCategories = data.events

//Add a listener's event in each check
checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        const selectedChecks = document.querySelectorAll(".form-check-input:checked")
        const selectedValuesChecks = Array.from(selectedChecks).map(function(checkbox) {
            return checkbox.value;
        });
        const filteredCheckboxes = Array.from(checkboxes).filter(function(value) {
            return selectedValuesChecks.includes(value.value)
        })
        const eventsFiltered = arrayByCategories.filter(function(event) {
            return filteredCheckboxes.map(function(checkbox) {
                return checkbox.value;
            }).includes(event.category)
        })
        console.log(eventsFiltered);
        if(eventsFiltered.length === 0){
            const notFound = "Cards no found, please try with another word";
            cardList.innerHTML = `<div class="alert alert-danger" role="alert">${notFound}</div>
            <a href="./index.html" class="btn btn-primary" id="no-foundC">Return Home</a>`
        }else{
            allCards(eventsFiltered)
        }
    })
})


