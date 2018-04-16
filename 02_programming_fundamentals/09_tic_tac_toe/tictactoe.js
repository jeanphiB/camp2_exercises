const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stateSize = 3;
const state = {
  a: Array(stateSize).fill(null),
  b: Array(stateSize).fill(null),
  c: Array(stateSize).fill(null)
}
const playerList = ["X", "O"];
let currentPlayer;
let playNumber = 0;

function renderCell(cell) {
  return (cell === null) ? "_" : cell;
}

function renderRow(letter) {
  const row = state[letter].map(renderCell).join(" | ");
  return `${letter} | ${row} |`;
}

function renderBoard() {
  const rows = Object.keys(state).map(renderRow).join("\n");
  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

function nextPlayer() {
  currentPlayer = (currentPlayer === playerList[0]) ? playerList[1] : playerList[0];
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = parseInt(input[1], 10) - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function testRow(letter) {
  let result = true;
  state[letter].forEach(value => {
    if (value !== currentPlayer) {
      result = false;
    }
  });
  return result;
}

function testCol(number) {
  let result = true;
  Object.keys(state).forEach(letter => {
    if (state[letter][number] !== currentPlayer) {
      result = false;
    }
  });
  return result;
}

function testDiagonal1() {
  for(let i = 0; i < Object.keys(state).length; i++) {
    if (state[Object.keys(state)[i]][i] !== currentPlayer) {
      return false;
    }
  }
  return true;
}

function testDiagonal2() {
  for(let i = 0; i < Object.keys(state).length; i++) {
    if (state[Object.keys(state)[(Object.keys(state).length - 1) - i]][i] !== currentPlayer) {
      return false;
    }
  }
  return true;
}

function testState(coordinate) {
  return testRow(coordinate.letter) || testCol(coordinate.digit) || testDiagonal1() || testDiagonal2();
}

function handleInput(input) {
  const coordinate = getCoordinate(input);

  if (coordinate !== null) {
    playNumber++;
    updateState(coordinate);

    if (testState(coordinate)) {
      console.log(renderBoard());
      console.log(`Gamer ${currentPlayer} WIN !!!!`);
      reader.close();
      return;

    } else if(playNumber === 9) {
      console.log(renderBoard());
      console.log("Finish! None win this game");
      reader.close();
      return;
    }

    nextPlayer();
  } else {
    console.log("This is not a valid move!");
  }
  playTurn();
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What's your move?\n`, handleInput);
}

function start() {
  currentPlayer = playerList[Math.round(Math.random())];
  playTurn();
}

start();
