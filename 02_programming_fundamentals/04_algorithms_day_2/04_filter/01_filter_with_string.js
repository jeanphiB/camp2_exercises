// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  // Your code here
  let resultArray = [];
  if (str !== "even" && str !== "odd") {
    resultArray = array;
  } else {
    for(let i = 0; i < array.length; i++) {
      if ((str === "even" && array[i] % 2 === 0) || (str === "odd" && array[i] % 2 === 1)) {
        resultArray.push(array[i]);
      }
    }
  }
  return resultArray;
}
//console.log(filter([1, 2, 3, 4, 5], "even"));
//console.log(filter([], "even"));

// do not remove this line, it is for tests
module.exports = filter;
