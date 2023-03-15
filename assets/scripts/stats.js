//petition's fetch
let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

async function showStadistics(){
    fetch(urlApi)
    .then(response => response.json())
    .then(datas =>{
        let allData = datas.events;
        for (let i = 0; i < allData.length; i++) {
            console.log(allData[i].capacity);
        }

        let hiAttendancePast = 0
        let hiAttNamePast = ""
        let lowAttendancePast = 100
        let lowAttNamePast = ""
        let hiAttendanceUp = 0
        let hiAttNameUp =0
        let lowAttNameUp = ""
        let lowAttendanceUp = 100
        let finalMoreAssistance = ""
        let finalLessAssistance = ""
        let result = 0

        //filter with past
        let cardListPast = allData.filter(date => date.date < datas.currentDate)
        

        for (let i = 0; i < cardListPast.length; i++) {
            result = (cardListPast[i].assistance * 100) / cardListPast[i].capacity
            if (result > hiAttendancePast) {
                hiAttendancePast = result
                hiAttNamePast = cardListPast[i].name
            }else{
                if (result < lowAttendancePast) {
                    lowAttendancePast = result
                    lowAttNamePast = cardListPast[i].name
                }
            }
            
        }
        //show more and low assistance past
        console.log("more assistance past " , hiAttendancePast.toFixed(2), "% and the event is ", hiAttNamePast);
        console.log("less assistance past ", lowAttendancePast, "% and the event is ", lowAttNamePast);

        //add title to tbody
        //test//
        //select tbody sendond and third, no first
        const table2Body = document.querySelectorAll("table:nth-child(2) tbody");
        const table3Body = document.querySelectorAll("table:nth-child(3) tbody");

        //inserted en second tbody a row
        const newRow = table2Body[0].insertRow();
        //inserted three columns in the row
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        const cell3 = newRow.insertCell();

        //gave a name in each column
        cell1.textContent = "Categories";
        cell2.textContent = "Renues";
        cell3.textContent = "Percentage of attendance";

        //same code up but with the third tbody (no first one)
        const newRow3 = table3Body[0].insertRow();
        const cell13 = newRow3.insertCell();
        const cell23 = newRow3.insertCell();
        const cell33 = newRow3.insertCell();
        cell13.textContent = "Categories";
        cell23.textContent = "Renues";
        cell33.textContent = "Percentage of attendance";


        //filter with upcoming
        cardListUp = allData.filter(date => date.date > datas.currentDate)
        console.log("los datos de los eventos futuros son")
        console.log(cardListUp);
        
        for (let i = 0; i < cardListUp.length; i++) {
            result = (cardListUp[i].estimate * 100)/ cardListUp[i].capacity
            if (result > hiAttendanceUp) {
                hiAttendanceUp = result
                hiAttNameUp = cardListUp[i].name
            }else{
                if (result < lowAttendanceUp) {
                    lowAttendanceUp = result
                    lowAttNameUp = cardListUp[i].name
                }
            }
        }

        //show more and low assistance up
        console.log("more assistance up " , hiAttendanceUp, "% and the event is ", hiAttNameUp);
        console.log("less assistance up ", lowAttendanceUp, "% and the event is ", lowAttNameUp);

        if(hiAttendancePast > hiAttendanceUp){
            finalMoreAssistance = hiAttNamePast
        }else{
            finalMoreAssistance = hiAttNameUp
        }

        if(lowAttendancePast < lowAttendanceUp){
            finalLessAssistance = lowAttNamePast
        }else{
            finalLessAssistance = lowAttNameUp
        }

        console.log("highest percentage of attendance ", finalMoreAssistance);
        console.log("lowest percentage of attendance ", finalLessAssistance);

        let moreCapacity = 0
        let nameMore = ""

        for (let i = 0; i < allData.length; i++) {
            if (allData[i].capacity > moreCapacity) {
                moreCapacity = allData[i].capacity
                nameMore = allData[i].name
            }
        }
        console.log("more capacity ",moreCapacity, "and the name is ",nameMore);

        //selecting td by id to actualice first file of the table
        let higthAssist = document.getElementById("hpa")
        let lowAssist = document.getElementById("lpa")
        let moreCapac = document.getElementById("mc")

        //transfering to the table higth(hpa) , low(lpa) and more capacity(mc)
        higthAssist.textContent = nameMore
        lowAssist.textContent = finalLessAssistance
        moreCapac.textContent = nameMore

    //seeing how many categorys there are upcoming using cardListUp(future events)
    let onlyCategoriesUp = cardListUp.reduce(function(categories, event) {
    if (!categories.includes(event.category)) {
        categories.push(event.category);
    }
    return categories;
    }, []);

    //sort onlyCategoriesUp
    let sortUp = onlyCategoriesUp.sort()
    //showing up's categories
    console.log(sortUp)

    //seeing how many categorys there are past using cardListPast(past events)
    let onlyCategoriesPast = cardListPast.reduce(function(categories, event) {
        if (!categories.includes(event.category)) {
            categories.push(event.category);
        }
        return categories;
        }, []);

    //sort onlyCategoriesPast
    let sortPast = onlyCategoriesPast.sort()
    //showing past`s categories
    console.log(sortPast);

    //making a fuction that allow to see how many categories there are in past or upcoming
    function gralCategories(categPastOrUp){
        let gralCategories = categPastOrUp.reduce(function(categories, event) {
            if (!categories.includes(event.category)) {
                categories.push(event.category);
            }
            return categories;
            }, []);
    
        //sort onlyCategoriesPast
        let sortGral = gralCategories.sort()
        //showing past`s categories
        console.log(sortGral);
    }
    //using the gral function of categories and showing in console
    gralCategories(cardListUp)
    gralCategories(cardListPast)

    //creating an array for table stats for Upcoming
    const statsResultUp =[]


    function statsGralUp(category, events){
        console.log("acpa es resultado Upcoming");
        let totalRefund = 0
        let totalPercent = 0
        let totalCapacity = 0
        let totalEstimate = 0
        for (let i = 0; i < events.length; i++) {
            totalRefund += events[i].price * events[i].estimate;
            totalCapacity += events[i].capacity;
            totalEstimate += events[i].estimate;
        }
        
        totalPercent = (totalEstimate * 100) / totalCapacity;
        statsResultUp.push({category: category, refund: totalRefund, percent: totalPercent.toFixed(2)})
        
        console.log("Category:", category,);
        console.log("Total refund:", totalRefund);
        console.log("Total percent:", totalPercent.toFixed(2),"%");


        console.log(statsResultUp);
    }

    for(i= 0; i < sortUp.length; i++){
        let sendCate =sortUp[i]
        let filteredEvents = cardListUp.filter(event => event.category.toLowerCase() === sendCate.toLowerCase());
        statsGralUp(sendCate, filteredEvents);
    }

    //for by category past
    // console.log("aca es la lista de pasado ",sortPast);

     //creating an array for table stats for Past
    const statsResultPast =[]
    
    function statsGralPast(category, events){
        let totalRefundP = 0
        let totalPercentP = 0
        let totalCapacityP = 0
        let totalAssistanceP = 0
        for(let i = 0; i < events.length; i++){
            totalRefundP += events[i].price * events[i].assistance
            totalCapacityP += events[i].capacity
            totalAssistanceP += events[i].assistance
        }
        totalPercentP = (totalAssistanceP * 100) / totalCapacityP
        statsResultPast.push({category: category, refund: totalRefundP, percent: totalPercentP.toFixed(2)})

        console.log(statsResultPast);
    }

    for(i = 0; i < sortPast.length; i++){
        let sendCateP = sortPast[i]
        let filteredEventsP = cardListPast.filter(event => event.category.toLowerCase() === sendCateP.toLowerCase());
        statsGralPast(sendCateP,filteredEventsP)
    }


    //adding Categories,Renues and Percentage of attendance to the table
    const tableSecond =  document.getElementById('upcoming')
    const tableThird = document.getElementById('past')

    function generateRowsUp(){
        
        let rows = ""
        rows += `<tr>
        <th>Categories</th>
        <th>Renues</th>
        <th>Percentage of attendance</th>
        </tr>`
        for (const datArray of statsResultUp) {
            rows += `<tr>
            <td>${datArray.category}</td>
            <td>${datArray.refund}</td>
            <td>${datArray.percent}</td>
            
        </tr>`
        
        }
        tableSecond.innerHTML = rows
        
    }
    generateRowsUp()

    function generateRowsPast(){
        let rowsPast = ""
        rowsPast += `<tr>
        <th>Categories</th>
        <th>Renues</th>
        <th>Percentage of attendance</th>
        </tr>`

        for (const arrayPast of statsResultPast) {
            rowsPast += `<tr>
            <td>${arrayPast.category}</td>
            <td>${arrayPast.refund}</td>
            <td>${arrayPast.percent}</td>
            
        </tr>` 
        }
        tableThird.innerHTML = rowsPast
    }
    generateRowsPast()
    

    })
    .catch(error =>{
        console.log(error);
    })
}

showStadistics()