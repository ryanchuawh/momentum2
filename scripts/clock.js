const clockContainer = document.querySelector(".clock-container"), 
    clockTitle = clockContainer.querySelector("span");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 60000);
}

init();