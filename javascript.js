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

function playRound(player = playerSelection, computer = computerSelection) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    result = 'Player';
    if (computer === player) {
        result = 'Tie';
    } else {
        switch(player) {
            case 'rock':
                result = (computer === 'paper') ? 'Computer' : 'Player';
                break;
            case 'paper':
                result = (computer === 'scissors') ? 'Computer' : 'Player';
                break;
            case 'scissors':
                result = (computer === 'rock') ? 'Computer' : 'Player';
                break;
        }
    }      
    console.log(`${player} vs. ${computer} = ${result}`);
    return result;
}

const computerSelection = getComputerChoice();
const playerSelection = 'rock';
