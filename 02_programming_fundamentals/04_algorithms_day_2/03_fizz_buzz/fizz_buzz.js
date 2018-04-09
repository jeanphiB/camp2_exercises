/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function modify(value) {
  let result = value;
  if (value % 3 === 0 && value % 5 === 0) {
    result = "FizzBuzz";
  } else if (value % 3 === 0) {
    result = "Fizz";
  } else if (value % 5 === 0) {
    result = "Buzz";
  } else {
    result = value;
  }
  return result;
}

function fizzBuzz(list) {
  return list.map(modify);
}

module.exports = fizzBuzz;
