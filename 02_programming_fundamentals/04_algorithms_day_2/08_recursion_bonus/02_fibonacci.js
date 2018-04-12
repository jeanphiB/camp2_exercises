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

function fibo(value) {
  if (typeof value === "string") {
    return null;
  } else if (value < 0) {
    return null;
  } else if (value === 0) {
    return 0;
  } else if (value === 1) {
    return 1;
  } else {
    return fibo(value - 2) + fibo(value - 1);
  }
}

// do not remove this line, it is for tests
module.exports = fibo;
