const bestOf = 5;
let computerWin = 0;
let playerWin = 0;
let turn = 0;

const choiceResult = document.querySelector('#roundResult');
const score = document.querySelector('#overallResult');

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', () => game(currentBtn.id));
});

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

function playRound(player, computer) {
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

function newGame() {
    turn = 0;
    computerWin = 0;
    playerWin = 0;

    choiceResult.textContent = '';
    score.textContent = '';
}

function game(selection) {
    if (turn >= bestOf) newGame();

    let overallWinner,
        roundWinner,
        theResult,
        computerSelection, 
        playerSelection;


    playerSelection = selection;
    computerSelection = getComputerChoice();
    theResult = playRound(playerSelection, computerSelection);
    turn++;

    if (theResult === 'tie') {
        roundWinner = 'Tie';
        turn--;
    } else if (theResult === 'win') {
        roundWinner = 'Player';
        playerWin++;
    } else {
        roundWinner = 'Computer';
        computerWin++;
    }

    overallWinner = (playerWin > computerWin) ? 'player' : 'computer'

    let resultP = document.createElement('p');
    resultP.textContent = (theResult === 'tie') ?  
        `Turn${turn+1}: ${playerSelection} vs. ${computerSelection}, Tie!` :
        `Turn${turn}: ${playerSelection} vs. ${computerSelection}, ${roundWinner} wins this round!`;
    choiceResult.appendChild(resultP);

    score.textContent = `Player wins ${playerWin}, computer wins ${computerWin}`;
}
