/*
Let's go back to our game from yesterday where we displayed the number
of guesses. The goal is now to add some persistence to our game so that
it remembers the best score and the total number of games.

Be sure to update your original interface to display these numbers to
the player each time the game starts and ends.

It should look like this:

> node number-game.js
Welcome to the number game You played X games and your best score is: Y
*/
// This function will clear the terminal when called
const fs = require("fs");
const clear = require("cli-clear");
const readline = require("readline");

const userFile = "user.json";

const initUser = {
  nbGames: 0,
  highestScore: 0
}

function readUser() {
  let redUser = initUser;
  if (fs.existsSync(userFile)) {
    data = fs.readFileSync(userFile);
    redUser = JSON.parse(data);
  }
  return redUser;
}

function saveUser(userToSave) {
  fs.writeFile(userFile, JSON.stringify(userToSave), error => {
    if (error) {
      console.warn(error);
      return;
    }
  });
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * (max));
}

function shuffledArray(count) {
  let shuffled = [];
  while(shuffled.length < count) {
    let pos = getRandomInt(count);
    if (!shuffled.includes(pos)) {
      shuffled.push(pos);
    }
  }
  return shuffled;
}

function getShuffledCards(cards) {
  let shuffle = shuffledArray(cards.length);
  return shuffle.map((card) => cards[card]);
}

function recursiveQuestion(question) {
  reader.question(question, stringNumber => {
    let result;
    let tempCards = foundCards.slice();

    nbOfTry++;

    if (isNaN(stringNumber)
     || stringNumber.length !== 2
     || stringNumber < "11"
     || stringNumber > "66"
     || stringNumber[0] === stringNumber[1]) {
      console.log("Please give me 2 numbers between 1 and 6 to select cards");
    } else {
      let card1 = parseInt(stringNumber[0], 10) - 1;
      let card2 = parseInt(stringNumber[1], 10) - 1;
      if (hidenCards[card1] === hidenCards[card2]) {
        foundCards[card1] = hidenCards[card1];
        foundCards[card2] = hidenCards[card2];
        tempCards = foundCards.slice();

        if (!foundCards.includes("X")) {
          clear();
          console.log(foundCards.join(" "));
          console.log(`You won in ${nbOfTry} steps!`);
          reader.close();

          user.nbGames++;
          if (nbOfTry < user.highestScore) {
            user.highestScore = nbOfTry;
          }
          saveUser(user);

          return;
        }
      } else {
        tempCards[card1] = hidenCards[card1];
        tempCards[card2] = hidenCards[card2];
      }
    }
    setTimeout(function() {
      clear();
      console.log(foundCards.join(" "));
    }, 1000);

    recursiveQuestion(tempCards.join(" ")+"\n");
  });
}

let nbOfTry = 0;
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let hidenCards = getShuffledCards(cards);
let foundCards = ["X", "X", "X", "X", "X", "X"];
clear();
//console.log(hidenCards);

user = readUser();
console.log(`Welcome to the number game You played ${user.nbGames} games and your best score is: ${user.highestScore}\n`);
recursiveQuestion("To find the cards give me 2 differents numbers between 1 and 6)");
