document.addEventListener('DOMContentLoaded', function() {
    let playerScore = 0;
    let computerScore = 0;
    let choices = ['paper', 'scissors', 'rock'];
  
    const resultText = document.getElementById('result-text');
    const compTextOut = document.getElementById('computer-out-text');
    const buttons = document.querySelectorAll('.user-choice');
  
    let getComputerChoice = function() {
        let i = Math.floor(Math.random() * 3);
        return choices[i];
    };
  
    let playGame = function(playerSelection, computerSelection) {
        const winningCombinations = {
            'rock': 'scissors',
            'scissors': 'paper',
            'paper': 'rock'
    };
  
    if (playerSelection === computerSelection) {
        playerScore += 0.5;
        computerScore += 0.5;
        compTextOut.textContent = 'I CHOSE.... ' + computerSelection + ' and you picked ' + playerSelection + ' This means we draw';
        return 'Draw';
    }
  
    if (winningCombinations[playerSelection] === computerSelection) {
        playerScore += 1;
        compTextOut.textContent = 'I CHOSE.... ' + computerSelection + ' and you picked ' + playerSelection + ' This means you win';
        return 'Player wins';
    } else {
        computerScore += 1;
        compTextOut.textContent = 'I CHOSE.... ' + computerSelection + ' and you picked ' + playerSelection + ' This means I win';
        return 'Computer wins';
        }
    };
  
    let updateScore = function(playerSelection, computerSelection) {
        //compTextOut.textContent = 'I CHOSE.... ' + computerSelection + ' and you picked ' + playerSelection + ' This means';
        resultText.textContent = 'Player Score: ' + playerScore + '  Computer Score: ' + computerScore;
    };
  
    let game = function() {
        buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let playerSelection = this.id;
            let computerSelection = getComputerChoice();
  
            let result = playGame(playerSelection, computerSelection);
            updateScore(playerSelection, computerSelection);
        });
      });
  
        updateScore('', getComputerChoice()); //Initial
    };
  
    game();
  });
  