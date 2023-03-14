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

        

        //filter with upcoming
        cardListUp = allData.filter(date => date.date > datas.currentDate)
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
    })
    .catch(error =>{
        console.log(error);
    })
}

showStadistics()