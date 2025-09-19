'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13; //Obtener el texto de la clase
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //Obtener el valor del elemento
*/

//event is something that happen on the web (click, mouse movement, etc.)
//Refactoring is to improve the code by simplifiying it
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let totalScore = Number(document.querySelector('.score').textContent);
let highScore = 0;

//Refactoring Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Restart the game
document.querySelector('.again').addEventListener('click', function () {
  totalScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = totalScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Button check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input
  if (!guess) {
    displayMessage('No number!');
  }
  //Player wins
  else if (guess === secretNumber) {
    displayMessage('Correct!');
    // document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // update highscore
    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Refactoring
  } else if (guess !== secretNumber) {
    if (totalScore > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    } else {
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  /*
  //Code Without the  DRY (Don't repeat yourself) principle
  else if (guess > secretNumber) {
    if (totalScore > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    }
    if (totalScore === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  //Guess too low
  else if (guess < secretNumber) {
    if (totalScore > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    }
    if (totalScore === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
*/
});
