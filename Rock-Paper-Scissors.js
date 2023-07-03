document.addEventListener('DOMContentLoaded', function() {
    let playerScore = 0;
    let computerScore = 0;
  
    const resultText = document.getElementById('result-text');
    const buttons = document.querySelectorAll('.user-choice');
  
    let getComputerChoice = function() {
      let choices = ['paper', 'scissors', 'rock'];
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
        return 'Draw';
      }
  
      if (winningCombinations[playerSelection] === computerSelection) {
        playerScore += 1;
        return 'Player wins';
      } else {
        computerScore += 1;
        return 'Computer wins';
      }
    };
  
    let updateScore = function() {
      resultText.textContent = 'Player Score: ' + playerScore + '  Computer Score: ' + computerScore;
    };
  
    let resetScores = function() {
      playerScore = 0;
      computerScore = 0;
      updateScore();
    };
  
    let game = function() {
      updateScore();
  
      buttons.forEach(function(button) {
        button.addEventListener('click', function() {
          let playerSelection = this.id;
          let computerSelection = getComputerChoice();
  
          let result = playGame(playerSelection, computerSelection);
          console.log(result);
          updateScore();
        });
      });
    };
  
    game();
  });
  