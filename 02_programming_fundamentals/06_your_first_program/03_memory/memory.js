// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");

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
clear();
console.log(hidenCards);
let foundCards = ["X", "X", "X", "X", "X", "X"];
recursiveQuestion("To find the cards give me 2 differents numbers between 1 and 6)");
