// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  // Your code here
  let resultArray = [];
  for(let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

// do not remove this line, it is for tests
module.exports = filter;
