let getComputerChoice = function(){
    let choices = ['Paper' , 'Scissors' , 'Rock'];
    let i = Math.floor(Math.random() * 3);
    return choices[i].toLowerCase();
}

let playGame = function(playerSelection, computerSelection) {
    const winningCombinations = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (playerSelection === computerSelection) {
        return 'Draw';
    }

    if (winningCombinations[playerSelection] === computerSelection) {
        return 'Player wins';
    } else {
        return 'Computer wins';
    }
}

let game = function(numberOfRound) {
    for (i = 0; i <= numberOfRound; i++){
        let playerSelection = prompt('What is your choice - rock, paper, or scissors?');
        let computerSelection = getComputerChoice();

        let result = playGame(playerSelection, computerSelection);
        console.log(result);
    }

}

game(5)