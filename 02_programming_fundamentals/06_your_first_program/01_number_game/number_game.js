const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const recursiveQuestion = function(question) {
  reader.question(question, stringNumber => {
    let result;

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
        console.log("You won!");
        reader.close();
        return;
      }
    }
    recursiveQuestion(result + "\n");
  });
};

let magicNumber = getRandomInt(100);
//console.log(magicNumber);

recursiveQuestion("What is your number? ");
