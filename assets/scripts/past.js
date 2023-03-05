const cardListPast = document.getElementById('list-card')

function cardsPast(data){
    cardListPast.innerHTML = ""
    data.forEach(event => {
        cardListPast.innerHTML +=
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

const filterPast = data.events.filter(date => date.date < data.currentDate)
cardsPast(filterPast)

const input = document.getElementById('input-w')
const link = document.querySelector('#inputseaarch');  

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        const input = document.getElementById('input-w')
        if(input.value === "" ){
            input.value = "Cinema";
            const byCategory = filterPast.filter(category => category.category.toLowerCase()  === input.value.toLowerCase())
            cardsPast(byCategory)
        }else{
            const specialCategory = filterPast.filter(event =>
                    event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
                )
            if(specialCategory.length === 0){
                specialCategory.description = "No se ha encontrado ninguna card con esa especificación, pruebe de nuevo"
            }
            cardsPast(specialCategory)
        }
        input.value="";
    }
})

link.addEventListener('click', (event) =>{
    event.preventDefault();
    const input = document.getElementById('input-w')
    if(input.value === "" ){
        input.value = "Cinema";
        const byCategory = filterPast.filter(category => category.category.toLowerCase() === input.value.toLowerCase())
        console.log(byCategory)
        cardsPast(byCategory)
    }else{
        const specialCategory = filterPast.filter(event =>
            event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
        )
        
        console.log(specialCategory);
        if(specialCategory.length === 0){
            specialCategory.description = "No se ha encontrado ninguna card con esa especificación, pruebe de nuevo"
        }
        cardsPast(specialCategory)
    }
    input.value="";
});

//by boxe's category checkboxs
const checkboxes = document.querySelectorAll(".form-check-input");

const arrayByCategories = filterPast

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
            cardsPast(filterPast)
        }else{
            cardsPast(eventsFiltered)
        }
    })

})