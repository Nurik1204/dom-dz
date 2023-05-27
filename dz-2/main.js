let startTime, currentTime, elapsedTime = 0;
let timerInterval;
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resumeButton = document.getElementById('resumeButton');
const clearButton = document.getElementById('clearButton');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resumeTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
}

function clearTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerElement.textContent = '00:00:00';
}

function updateTimer() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let formattedTime = formatTime(elapsedTime);
    timerElement.textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resumeButton.addEventListener('click', resumeTimer);
clearButton.addEventListener('click', clearTimer);