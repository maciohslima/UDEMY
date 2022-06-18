var sec = 0;
var min = 0;
var hr = 0;

var interval;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit);
    }else{
        return(digit);
    }
}

function start(){
    watch();
    interval = setInterval(watch,10);
    document.getElementById("disabled-start").disabled = true;
}

function pause(){
    clearInterval(interval);
    document.getElementById('disabled-start').disabled = false;
}

function stop(){
    clearInterval(interval);
    sec=0;
    min=0;
    window.alert("Você parou o relógio em: " + document.getElementById('watch').innerText);
    document.getElementById('watch').innerText='00:00:00';
    document.getElementById("disabled-start").disabled = false;
}

function watch(){
    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(min==60){
            min=0;
            hr++;
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec);
}