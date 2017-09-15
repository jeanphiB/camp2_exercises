const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numberToGuess = Math.ceil(Math.random() * 99);
let numberOfTries = 0;

function checkAnswer(answer) {
  const number = parseInt(answer, 10);
  numberOfTries = numberOfTries + 1;
  let hint;

  if (number === numberToGuess) {
    if (numberOfTries === 1) {
      console.log(`You won in one go! Are you psychic?`);
    } else {
      console.log(`You won in ${numberOfTries} steps!`);
    }
    reader.close();
    return;
  }
  if (isNaN(number)) {
    hint = "This was not a number";
  } else if (number < 1 || number > 100) {
    hint = "The number is between 1 and 100";
  } else if (number < numberToGuess) {
    hint = "Too low";
  } else {
    hint = "Too high";
  }
  reader.question(hint + "\n", checkAnswer);
}

reader.question("Guess the number (between 1 and 100)\n", checkAnswer);
