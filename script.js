const dateEl = document.getElementById("date-picker");



const today = new Date();
const todayString = today.toISOString().split("T")[0];


//dateEl minimum date value
dateEl.setAttribute("min", todayString);

