// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```
for (let row = 1; row <= 9; row++) {
  let rowString = "";
  for (let col = 1; col <= 30; col++) {
    if ((col === 25 && row === 2) || (col === 7 && row === 9)) {
      rowString += "X";
    } else if ((col === 6 && row === 4) || (col === 18 && row === 7)) {
      rowString += "0";
    } else {
      rowString += "~";
    }
  }
  console.log(rowString);
}
