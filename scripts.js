let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let interval;
let seconds = 0;

// Function to format time in MM:SS
function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimer() {
    timerDisplay.textContent = formatTime(seconds);
}

// Start button functionality
startButton.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        // Play sound (Optional)
        // let sound = new Audio('start-sound.mp3');
        // sound.play();
    }
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateTimer();
});

// Initialize display
updateTimer();
