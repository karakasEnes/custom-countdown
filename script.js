const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');


const today = new Date();
const todayString = today.toISOString().split("T")[0];


// countdown container
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownActive;
function updateDOM() {
    countdownActive = setInterval( () => {
        const now = new Date().getTime();
        const distance = countdownValue - now;
        console.log("distance", distance);
    
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);
    
        console.log(days, hours, minutes, seconds);
    
        //populate countdown
        countdownElTitle.textContent = `${countdownTitle}`;
        timeElements[0].textContent = `${days}`
        timeElements[1].textContent = `${hours}`
        timeElements[2].textContent = `${minutes}`
        timeElements[3].textContent = `${seconds}`
    
        //hide input
        inputContainer.hidden = true;
    
        //show countdown
        countdownEl.hidden = false;
    
    }, second )
}


//submit button
function formEventListener(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;

    if (countdownDate === "") {
        alert("please select a date");

    } else {
        
        countdownValue = new Date(countdownDate).getTime();
        console.log("countdownValue", countdownValue);
        updateDOM();
    }

}


function reset () {
    // hide countdowns, show input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    // stop the countdown
    clearInterval(countdownActive);
    //clearing our countdowntitle and date
    countdownTitle = "";
    countdownDate = "";

}


//dateEl minimum date value
dateEl.setAttribute("min", todayString);



//event listener on form
countdownForm.addEventListener("submit", formEventListener);
countdownBtn.addEventListener("click", reset);

