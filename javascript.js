
let playerSelection = 'rock';
let computerSelection = getComputerChoice();

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
    result = `You win! ${capitalize(player)} beats ${computer}`;
    lostResult = `You lose! ${capitalize(computer)} beats ${player}`;
    if (computer === player) {
        result = `Tie! You both chose ${computer}`;
    } else {
        switch(player) {
            case 'rock':
                result = (computer === 'paper') ? lostResult : result;
                break;
            case 'paper':
                result = (computer === 'scissors') ? lostResult : result;
                break;
            case 'scissors':
                result = (computer === 'rock') ? lostResult : result;
                break;
        }
    }
    console.log(result);
    return result;
}

function game() {
    
}
