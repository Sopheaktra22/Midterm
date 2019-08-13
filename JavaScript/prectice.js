var timer = () =>{
    let times = new Date();
    let hour =(times.getHours() % 12).toString();
    let minute = times.getMinutes().toString();
    let second = times.getSeconds().toString();
    let output = document.getElementById("timer");

    if(hour.length < 2){
        hour = '0' + hour;
    }
    if(minute.length < 2){
        minute = '0' + minute;
    }
    if(second.length < 2){
        second = '0' + second;
    }
    if(times.getHours() > 0 && times.getHours() < 12){
        output.innerHTML = hour + ":" + minute + ":" + second + " " + "AM";
        document.getElementById("massage").innerHTML = "Good morning!";
    }else if(times.getHours() > 12 && times.getHours() < 17){
        output.innerHTML = hour + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("massage").innerHTML = "Good afternoon!";
    }else if(times.getHours() >= 17 && times.getHours() < 19){
        output.innerHTML = hour + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("massage").innerHTML = "Good evening!";
    }else{ 
        output.innerHTML = hour + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("massage").innerHTML = "Good night!";
    }
    if(hour === 12){
        output.innerHTML = times.getHours() + ":" + minute + ":" + second + " " + "PM";
    }
    
}
setInterval(timer, 1000);