const cardList = document.getElementById('list-card')


function allCards(data) {
    const fragment = document.createDocumentFragment(); // Crear un fragmento
    data.forEach(event => {
        const card = document.createElement('div'); // Crear el elemento
        card.className = 'card cardmarg cardsize';
        card.innerHTML = `
        <img src="${event.image}" class="card-img-top imgcard" alt="...">
        <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
        </div>
        <div class="card-footer">
            <p class="pinline">Price $${event.price}</p>
            <a href="./detail.html" class="btn btn-primary">More info..</a>
        </div>
    `;
        fragment.appendChild(card); // Agregar el elemento al fragmento
    });
    cardList.appendChild(fragment); // Agregar el fragmento al DOM
}

let allData = data.events;
allCards(allData);

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
        console.log("ha ingresado " + input.value)
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
    console.log("ha ingresado " + input.value)
});



//probando....????
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// console.log(checkboxes)//me muestra el total de los checkboxes 
const check = document.querySelectorAll(".form-check-input");

console.log(check);


const selected = []



// check.forEach(checkbox =>{
//     checkbox.addEventListener('change',function(){
//         if (this.checked) {
//             console.log("presionó "+ checkbox.value)
//             const byCategory = data.events.filter(category => category.category.toLowerCase() === checkbox.value.toLowerCase())
//             console.log(byCategory)
//             allCards(byCategory)
//         } else {
//             console.log("desmarcó " + checkbox.value)
            
//         }
//     })
// })

// check.forEach(checkbox =>{
//     checkbox.addEventListener('change', function(){
//         if(this.checked && checkbox.value === "Book Exchange"){
//             console.log("presionó "+ checkbox.value)
//             const byCategory = data.events.filter(category => category.category.toLowerCase() === checkbox.value.toLowerCase())
//             console.log(byCategory)
//             allCards(byCategory)
//         }else{
//             allCards(allData)
//         }
//     })
// })

//probar con los demás
// const byCategory = data.events.filter(category => category.category === "Book Exchange" || category.category === "Cinema")
// allCards(byCategory)


// check.forEach(checkbox =>{
//     checkbox.addEventListener('change', function(){
//         if(this.checked && checkbox.value === "Book Exchange" && checkbox.value === "Cinema"){
//             console.log("press " + checkbox.value);
            
//                 const byCategory = data.events.filter(category => category.category === "Book Exchange" || category.category === "Cinema")
//                 allCards(byCategory)
//             }else{
//                 allCards(allData)
//             }
            // console.log("presionó "+ checkbox.value)
            // const byCategory = data.events.filter(category => category.category.toLowerCase() === checkbox.value.toLowerCase())
            // console.log(byCategory)
            // allCards(byCategory)

//     })
// })

