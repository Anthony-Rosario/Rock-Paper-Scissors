import { getRandomThrow, userWin, userLose, draw } from './get-random-throw.js';


const startButton = document.getElementById('start-game');
const resetButton = document.getElementById('reset-game');
const winDisplay = document.getElementById('win');
const loseDisplay = document.getElementById('loss');
const tieDisplay = document.getElementById('tie');
const totalAttempts = document.getElementById('total');
const gameResets = document.getElementById('reset-times');


let wins = 0;
let ties = 0;
let losses = 0;
let total = 0;
let resets = 0;

startButton.addEventListener('click', () => {
    total++;

    let machineThrow = getRandomThrow();
    const checkedButton = document.querySelector(':checked');
    const userThrow = checkedButton.value;

    if (machineThrow === userThrow) {
        draw();
        ties++;
        tieDisplay.textContent = ties;
        totalAttempts.textContent = total;

    } else if (userWin(userThrow, machineThrow)) {
        wins++;
        winDisplay.textContent = wins;
        totalAttempts.textContent = total;

    } else if (!userWin(userThrow, machineThrow)) {
        userLose(userThrow, machineThrow);
        losses++;
        loseDisplay.textContent = losses;
        totalAttempts.textContent = total;
    }
});


resetButton.addEventListener('click', () => {
    resets++;
    gameResets.textContent = resets;

    wins = 0;
    ties = 0;
    losses = 0;
    total = 0;

    winDisplay.textContent = wins;
    tieDisplay.textContent = ties;
    loseDisplay.textContent = losses;
    totalAttempts.textContent = total;
});