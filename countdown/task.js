const status = document.getElementById("status");
const timerElement = document.getElementById("timer");


let timerValue = 5 * 60;


function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


const updateTimer = function () {
    timerElement.innerText = formatTime(timerValue);

    timerValue--;


    if (timerValue < 0) {

        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
};

updateTimer();

const intervalId = setInterval(updateTimer, 1000);