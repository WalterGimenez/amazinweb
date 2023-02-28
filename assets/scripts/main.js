const cardList = document.getElementById('list-card')

function allCards(data){
    cardList.innerHTML = ""
    data.forEach(event => {
        cardList.innerHTML +=
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

let allData = data.events
allCards(allData)


const input = document.getElementById('input-w')
const link = document.querySelector('#inputseaarch');  

input.addEventListener('keypress', function(event){ 
    if(event.key === "Enter"){   
        const input = document.getElementById('input-w')
        if(input.value === "" ){
            input.value = "Cinema";
        }
        const byCategory = data.events.filter(category => category.category.toLowerCase()  === input.value.toLowerCase())
        console.log(byCategory)
        allCards(byCategory)
        alert("ha ingresado " + input.value)
    }
})

link.addEventListener('click', (event) =>{
    event.preventDefault();
    const input = document.getElementById('input-w')
    if(input.value === "" ){
        input.value = "Cinema";
    }
    const byCategory = data.events.filter(category => category.category.toLowerCase() === input.value.toLowerCase())

    console.log(byCategory)
    allCards(byCategory)
    alert("ha ingresado " + input.value)
});


const catBook = document.getElementById('flexCheckDefault1')
catBook.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ catBook.value)
        
    } else {
        alert("desmarcó " + catBook.value)
        
    }
});

const cinema = document.getElementById('flexCheckDefault2')
cinema.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ cinema.value)
        
    } else {
        alert("desmarcó " + cinema.value)
        
    }
});

const costume = document.getElementById('flexCheckDefault3')
costume.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ costume.value)
        
    } else {
        alert("desmarcó " + costume.value)
        
    }
});

const food = document.getElementById('flexCheckDefault4')
food.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ food.value)
        
    } else {
        alert("desmarcó " + food.value)
        
    }
});

const museum = document.getElementById('flexCheckDefault5')
museum.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ museum.value)
        
    } else {
        alert("desmarcó " + museum.value)
        
    }
});

const concert = document.getElementById('flexCheckDefault6')
concert.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ concert.value)
        
    } else {
        alert("desmarcó " + concert.value)
        
    }
});

const race = document.getElementById('flexCheckDefault7')
race.addEventListener('change', function(){
    if (this.checked) {
        alert("presionó "+ race.value)
        
    } else {
        alert("desmarcó " + race.value)
        
    }
});




