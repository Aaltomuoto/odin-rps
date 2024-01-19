function getComputerChoice () {
    let rand = Math.floor(Math.random()*3);
    let result;
    switch (rand) {
        case 0:
            result = 'Tic';
            break;
        case 1:
            result = 'Tac';
            break;
        case 2:
            result = 'Toe';
            break;
    }
    return result;
}