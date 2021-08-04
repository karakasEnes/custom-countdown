const dateEl = document.getElementById("date-picker");
const countdownEl = document.getElementById("countdownForm");


const today = new Date();
const todayString = today.toISOString().split("T")[0];

function formEventListener(e) {
    e.preventDefault();
    const titleValue = e.srcElement[0].value;
    const dateValue = e.srcElement[1].value;
}


//dateEl minimum date value
dateEl.setAttribute("min", todayString);



//event listener on form
countdownEl.addEventListener("submit", formEventListener);

