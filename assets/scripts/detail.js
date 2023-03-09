let params = new URLSearchParams(document.location.search)  //bring only id with the number (example: id=1)
let id = params.get("id")

//filtering the array for id
const card = data.events.filter(search => search._id == id)




//showing the card
const cardListDetail = document.getElementById('detail-card')

function detailCard(detail){
    // console.log(detail[0]._id);
    cardListDetail.innerHTML = ""
    // data.forEach(event => {
        cardListDetail.innerHTML =
        `<div class="card cardmarg cardsize cardsize-detail">
            <img src="${detail[0].image}" class="card-img-top imgcard img-detail" alt="...">
            <div class="card-body">
                <h5 class="card-title">${detail[0].name}</h5>
                <p class="card-text">${detail[0].description}</p>
                <p class="card-text">Place: ${detail[0].place}</p>
                <p class="card-text">Capacity: ${detail[0].capacity}</p>
                <p class="card-text">Date: ${detail[0].date}</p>
            </div>
            <div class="card-footer">
            <p class="pinline">Price $${detail[0].price}</p>
                <a href="./index.html" class="btn btn-primary">Return Home</a>
            </div>
        </div>`
    // });
}

detailCard(card)
