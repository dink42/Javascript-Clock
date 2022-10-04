const houerEl = document.getElementById('houer');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h>12){
        h = h - 12;
        ampm = "PM";
    }
    houerEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock();
    }, 1000)
}



updateClock();