const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(1 + Math.random() * Math.floor(max - 1));
}

const recursiveQuestion = function(question) {
  reader.question(question, stringNumber => {
    let result;

    nbOfTry++;

    if (isNaN(stringNumber)) {
      result = "This was not a number";
    } else {
      let number = parseInt(stringNumber, 10);
      if (number < 1 || number > 100) {
        result = "The number is between 1 and 100";
      } else if (number < magicNumber) {
        result = "Too low";
      } else if (number > magicNumber) {
        result = "Too high";
      } else if (number === magicNumber) {
        if (nbOfTry === 1) {
          console.log("WONDERFULL! You won at the first try! You're lucky, do you think to play LOTO today?");
        } else {
          console.log(`You won in ${nbOfTry} steps!`);
        }
        reader.close();
        return;
      }
    }
    recursiveQuestion(result + "\n");
  });
};

let magicNumber = getRandomInt(100);
console.log(magicNumber);
let nbOfTry = 0;

recursiveQuestion("What is your number? ");
