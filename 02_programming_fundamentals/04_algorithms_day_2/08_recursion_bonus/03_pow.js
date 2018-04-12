// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

function pow(number, power) {
  if (power === 0) {
    return 1;
  } else {
    return number * pow(number, power - 1);
  }
}

// do not remove this line, it is for tests
module.exports = pow;
