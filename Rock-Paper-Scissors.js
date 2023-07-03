let playerScore = 0
let computerScore = 0

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
        playerScore += 0.5;
        computerScore += 0.5;
        return 'Draw';
    }

    if (winningCombinations[playerSelection] === computerSelection) {
        playerScore += 1;
        return 'Player wins';
        
    } else {
        computerScore += 1;
        return 'Computer wins';
    }
}

let game = function(numberOfRound) {
    for (i = 0; i <= numberOfRound; i++){
        let playerSelection = prompt('What is your choice - rock, paper, or scissors?');
        let computerSelection = getComputerChoice();

        let result = playGame(playerSelection, computerSelection);
        console.log(result)
        console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
    }
    if (playerScore === computerScore) {
        console.log('DRAW')
    }

    playerScore > computerScore ? console.log('You have won') : console.log('The computer has won');
}



game(5)