// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let rowArray = [];
for (let row = 1; row <= numberOfLine; row++) {
  let rowString = "";
  for (let col = numberOfLine; col >= row; col--) {
    rowString += col;
  }
  rowArray.push(rowString);
}
console.log(rowArray.join("\n"));
