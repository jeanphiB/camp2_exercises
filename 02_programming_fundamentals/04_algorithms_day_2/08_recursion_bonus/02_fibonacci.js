// In mathematics, the Fibonacci numbers are the numbers in the
// following integer sequence, called the Fibonacci sequence,
// and characterized by the fact that every number after
// the first two is the sum of the two
// preceding ones : 0, 1, 1, 2, 3, 5, 8, 13, 21...
//
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number.
//
// Implement a `fibo` function that takes an argument n and returns
// the n'th value of the sequence.
//
// Remember that you can call `fibo` inside of itself
// even several times
let current = 0;

function fibo(n) {
  result = null;
  if (n === 0) {
    result = 0;
  } else if (n > 0) {
    result = fibo(n - 1) + n;
    console.log(`n=${n} - result=${result}`);
  }
  return result;
}

console.log(fibo(8));

// do not remove this line, it is for tests
module.exports = fibo;
