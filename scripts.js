console.log('I am the script file');

let computerMove = '';



function pickComputerMove() {
  const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    let result = '';

    console.log(computerMove);
}