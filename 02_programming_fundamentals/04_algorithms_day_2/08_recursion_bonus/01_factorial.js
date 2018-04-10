// A factorial is the multiplication of a number by all numbers
// preceding it until 1.
// For instance, fact(5) = 5 * 4 * 3 * 2 * 1 = 120
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number.
//
// Remember that you can call `fact` inside of itself


function fact(n) {
  // your code here
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    let prevN = fact(n-1);
    if (prevN === null)
      return n;
    else
      return n * prevN;
  }
  return null;
}

//console.log(fact(1));

// do not remove this line, it is for tests
module.exports = fact;
