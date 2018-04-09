// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  // Your code here
  return array.filter(fn);
}

// do not remove this line, it is for tests
module.exports = filter;
