
let playerSelection = 'rock';
let computerSelection = getComputerChoice();
const bestOf = 5;
let computerWin = 0;
let playerWin = 0;

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', () => playRound(currentBtn.id));
})

function test(testInput) {
    console.log(testInput);
}

function getComputerChoice () {
    let rand = Math.floor(Math.random()*3);
    let result;
    switch (rand) {
        case 0:
            result = 'Rock';
            break;
        case 1:
            result = 'Paper';
            break;
        case 2:
            result = 'Scissors';
            break;
    }
    return result;
}

function capitalize(str) {
    end = str.slice(1);
    return str.charAt(0).toUpperCase() + end;
}

function playRound(player = playerSelection, computer = computerSelection) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    result = 'win';

    if (computer === player) {
        result = 'tie';
    } else {
        switch(player) {
            case 'rock':
                result = (computer === 'paper') ? 'lose' : 'win';
                break;
            case 'paper':
                result = (computer === 'scissors') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (computer === 'rock') ? 'lose' : 'win';
                break;
        }
    }
    return result;
}

function game() {
    computerWin = 0;
    playerWin = 0;
    for (i=1; i<=bestOf;i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt();
        theResult = playRound(playerSelection, computerSelection);
        if (theResult === 'tie') i--;
        if (theResult === 'win') playerWin++;
        if (theResult === 'lose') computerWin++
        console.log(`${playerSelection} vs. ${computerSelection}`);
    }
    winner = (playerWin > computerWin) ? 'player' : 'computer'
    console.log(`Player wins ${playerWin}, computer wins ${computerWin}, ${winner} wins!`);
}
