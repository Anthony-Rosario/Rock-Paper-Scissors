export function getRandomThrow() {
    const throwSymbol = Math.ceil(Math.random() * 3);
    if (throwSymbol === 1) return 'rock';
    if (throwSymbol === 2) return 'paper';
    if (throwSymbol === 3) return 'scissors';
}



const roundResults = document.getElementById('round-results');
const computerT = document.getElementById('computer-throw');

export function userWin(userThrow, computerThrow) {
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        roundResults.textContent = 'rock wins against scissors';
        computerT.textContent = 'Larry tosses scissors';
        return true;
    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        roundResults.textContent = 'paper wins against rock';
        computerT.textContent = 'Larry shoots rock';
        return true;
    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        roundResults.textContent = 'scissors wins against paper';
        computerT.textContent = 'Larry crumples paper';
        return true;
    }
}


export function userLose(player, machine) {
    if (machine === 'rock' && player === 'scissors') {
        roundResults.textContent = 'rock wins against scissors';
        computerT.textContent = 'Larry throws rock';
    } else if (machine === 'paper' && player === 'rock') {
        roundResults.textContent = 'paper wins against rock';
        computerT.textContent = 'Larry throws paper';
    } else if (machine === 'scissors' && player === 'paper') {
        roundResults.textContent = 'scissors wins against paper';
        computerT.textContent = 'Larry throws scissors';
    }
}


export function draw() {
    roundResults.textContent = 'draw';
}