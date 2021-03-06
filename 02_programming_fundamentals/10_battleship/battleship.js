/*
Far away "classical" software development, programming opens the door for game development. It's really a funny way to learn programming concepts and we will discover that now with a battleship game. Let's do that like a real pro.

Game Design
First, we need to define the rules of the game (or game mechanics as professionals say).

The game takes place on a grid of ten by ten.
Only one player against the computer.
Computer randomly puts ships on the sea.
At each attempt, the player chooses a position (coordinates) and launches a bomb on it
The game displays an indication of wether the player touched a ship or not.
Game Art
We want a really good looking interface for our game, so our designer provided us with the following style:

    A B C D E F G H I J
 1  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 2  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 3  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 4  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 5  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 6  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 7  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 8  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 9  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
10  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
Where do you want to launch a Bomb? (use coordinates like B3):

    A B C D E F G H I J
 1  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 2  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 3  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 4  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 5  ~ ~ X ~ ~ ~ ~ ~ ~ ~
 6  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 7  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 8  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 9  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
10  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
Where do you want to launch a Bomb? (use coordinates like B3): C5


Touché


    A B C D E F G H I J
 1  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 2  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 3  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 4  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 5  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 6  ~ ~   ~ ~ ~ ~ ~ ~ ~
 7  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 8  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
 9  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
10  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
Where do you want to launch a Bomb? (use coordinates like B3): C6
*/

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stateSize = 10;
const state = {
  a: Array(stateSize).fill(null),
  b: Array(stateSize).fill(null),
  c: Array(stateSize).fill(null),
  d: Array(stateSize).fill(null),
  e: Array(stateSize).fill(null),
  f: Array(stateSize).fill(null),
  g: Array(stateSize).fill(null),
  h: Array(stateSize).fill(null),
  i: Array(stateSize).fill(null),
  j: Array(stateSize).fill(null)
}

function renderCell(cell) {
  return (cell === null) ? "~" : cell;
}

function renderRow(letter) {
  const value = letter.charCodeAt(0) - 96;
  const row = state[letter].map(renderCell).join(" ");
  return `${(" " + value).slice(-2)} ${row}`;
}

function renderBoard() {
  const rows = Object.keys(state).map(renderRow).join("\n");
  let header = "  ";
  for(let i = 1; i <= stateSize; i++) {
    header += " " + String.fromCharCode(64 + i);
  }
  return `${header}\n${rows}`;
}

function aRandomNumber() {
  return Math.floor(Math.random() * Math.floor(stateSize));
}

function aRandomLetter() {
  return String.fromCharCode(97 + aRandomNumber());
}

function initRandomShips(number) {
  let shipCoordinates = [];
  for(let i = 0; i < number; i++) {
    const coordinate = {letter: aRandomLetter(), digit: aRandomNumber()};
    if (!shipCoordinates.includes(coordinate)) {
      shipCoordinates.push(coordinate);
    }
  }
  return shipCoordinates;
}

function getCoordinate(input) {
  const letter = input[0].toLowerCase();
  const digit = parseInt(input.substring(1, 3), 10) - 1;
  console.log(letter, digit);
  if (state[letter] && state[letter][digit]) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function testState(coordinate) {
  console.log(coordinate);
  return shipCoordinates.includes(coordinate);
}

function updateState(coordinate, value) {
  const line = state[coordinate.letter];
  line[coordinate.digit] = value;
}

//console.log(shipCoordinates);
function handleInput(input) {
  const coordinate = getCoordinate(input);
  console.log(coordinate);
  if (coordinate !== null) {
    if (testState(coordinate)) {
      updateState(coordinate, "X");
      console.log(renderBoard());
      console.log("Touch !");
      shipTouched++;
    } else {
      updateState(coordinate, " ");
      console.log(renderBoard());
      console.log("Failed !");
    }
    if(shipTouched === shipNumber) {
      console.log(`Finish! You won with ${nbTurn} turns.`);
      reader.close();
      return;
    }
  } else {
    console.log("This is not a valid move!");
  }
  playTurn();
}

function playTurn() {
  nbTurn++;
  console.log(renderBoard());
  reader.question("Where do you want to launch a Bomb? (use coordinates like B3):", handleInput);
}

let shipCoordinates;
let shipTouched = 0;
let nbTurn = 0;
const shipNumber = 10;
function start() {
  shipCoordinates = initRandomShips(shipNumber);
  console.log(shipCoordinates);
  playTurn();
}

start();
