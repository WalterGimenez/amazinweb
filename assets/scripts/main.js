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
            <a href="./detail.html" class="btn btn-primary">More info..</a>
        </div>
    </div>`
        
    }
    cardList.innerHTML = html_page;
}
function viewDetailCard(id){
    window.location.href = `./detail.html?id=${id}`//call id for detail.html
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
            console.log(byCategory)
            allCards(byCategory)
        }else{
            const specialCategory = arrayEvents.filter(event =>
                    event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
                )
                
            console.log(specialCategory);
            if(specialCategory.length === 0){
                specialCategory.description = "No se ha encontrado ninguna card con esa especificación, pruebe de nuevo"
            }
            allCards(specialCategory)
        }
        input.value="";
    }
})

link.addEventListener('click', (event) =>{
    event.preventDefault();
    const input = document.getElementById('input-w')
    const arrayEvents = data.events
    if(input.value === "" ){
        input.value = "Cinema";
        const byCategory = data.events.filter(category => category.category.toLowerCase() === input.value.toLowerCase())
        console.log(byCategory)
        allCards(byCategory)
    }else{
        const specialCategory = arrayEvents.filter(event =>
            event.name.toLowerCase().includes(input.value.toLowerCase()) || event.description.toLowerCase().includes(input.value.toLowerCase())
        )
        
        console.log(specialCategory);
        if(specialCategory.length === 0){
            specialCategory.description = "No se ha encontrado ninguna card con esa especificación, pruebe de nuevo"
        }
        allCards(specialCategory)
    }
    input.value="";
});



//probando....????
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// console.log(checkboxes)//me muestra el total de los checkboxes 
const check = document.querySelectorAll(".form-check-input");

console.log(check);


const selected = []
//probando filtros de events.name que contenga "bat" y que contenga algo en events.description "bring" 
// const especialCategory = data.events.filter(event =>
//     // event.name.includes("bat") || event.description.includes("10k")
//     event.name.toLowerCase().includes("bat") || event.description.toLowerCase().includes("bring")
// );
// console.log(especialCategory);

//lo de arriba funcionó, ahora tengo que aplicarlo al input




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

