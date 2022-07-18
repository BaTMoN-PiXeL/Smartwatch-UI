setCurrentTime = () => {
    const d = new Date();
    let h=d.getHours()
    let m=d.getMinutes()
    if(h<10){
         h="0"+h
    }
    if(m<10){
         m="0"+m
    }
    let time = (h + " : " + m) 
    document.getElementById("time").innerText = time;
}

setCurrentDate = () => {
    const d = new Date();
    let date = (d.getDate()).toString()
    let month = d.getMonth()
    switch(month){
        case 0:month="January"
        break
        case 1:month="February"
        break
        case 2:month="March"
        break
        case 3:month="April"
        break
        case 4:month="May"
        break
        case 5:month="June"
        break
        case 6:month="July"
        break
        case 7:month="August"
        break
        case 8:month="September"
        break
        case 9:month="October"
        break
        case 10:month="November"
        break
        case 11:month="December"
        break}
    // document.getElementById("month").innerText = month;
    document.getElementById("date").innerText = date+" "+month

}

// setCurrentMonth = () => {
   

// }

setCurrentDate()
setInterval(function () {setCurrentTime()}, 1000)
