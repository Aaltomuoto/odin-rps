
let playerSelection = 'rock';
let computerSelection = getComputerChoice();
const bestOf = 5;
let computerWin = 0;
let playerWin = 0;

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', () => playRound(currentBtn.id));
})

function getComputerChoice () {
    const rand = Math.floor(Math.random()*3);
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
    const end = str.slice(1);
    return str.charAt(0).toUpperCase() + end;
}

function playRound(player = playerSelection, computer = computerSelection) {
    const playerChoice = player.toLowerCase();
    const computerChoice = computer.toLowerCase();
    let result = 'lose';

    if (computerChoice === playerChoice) {
        result = 'tie';
    } else {
        switch(playerChoice) {
            case 'rock':
                result = (computerChoice === 'paper') ? 'lose' : 'win';
                break;
            case 'paper':
                result = (computerChoice === 'scissors') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (computerChoice === 'rock') ? 'lose' : 'win';
                break;
        }
    }
    return result;
}

function game() {
    let computerWin = 0;
    let playerWin = 0;
    let winner, 
        theResult, 
        computerSelection, 
        playerSelection;

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
