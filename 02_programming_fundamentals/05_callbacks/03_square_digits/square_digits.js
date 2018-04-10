// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer
function square(num) {
  return num * num;
}

function squareDigits0(number) {
  let result = "";
  let partNum = number;
  while (partNum > 0) {
    result = square(partNum % 10) + result;
    partNum = Math.floor(partNum / 10);
  }
  return Number.parseInt(result, 10);
}

function squareDigits(number) {
  let result = "";
  let chars = number.toString();
  for(let i = 0; i < chars.length; i++) {
    result += square(chars[i]);
  }
  return Number.parseInt(result, 10);
}

console.log(squareDigits(9129));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
