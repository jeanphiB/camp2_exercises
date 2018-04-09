// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩
function testUniqueInArray(array) {
  for(let i = 0; i < array.length; i++) {
    for(let iTest = i + 1; iTest < array.length; iTest++) {
      //console.log(array[i]+"="+array[iTest]+' - '+i+' - '+iTest);
      if (array[i] === array[iTest]) {
        return false;
      }
    }
  }
  return true;
}

function multiplier(value) {
  if (value.length > 1) {
    let aValue = value.toString().split("");
    return aValue.reduce((accumulator, currentValue) => (accumulator * currentValue));
  } else {
    return null;
  }
}

function isColorful(number) {
  let sNum = number.toString();
  let aCombi = [sNum];

  //--- test substring equality
  for(let nbCar = 1; nbCar < sNum.length; nbCar++) {
    for(let i = 0; i < sNum.length; i++) {
      let sPart = sNum.substring(i, i + nbCar);
      if (sPart.length === nbCar) {
        aCombi.push(sPart);
      }
    }
  }
  let result = testUniqueInArray(aCombi);

  //--- test with multiplier equality
  if (result) {
    let aCombi2 = sNum.split("");
    for(let i = 0; i < aCombi.length; i++) {
      let value = multiplier(aCombi[i]);
      if (value !== null) {
        aCombi2.push(value.toString());
      }
    }
    result = testUniqueInArray(aCombi2);
  }

  return result;
}

//console.log(isColorful(3245));
//console.log(isColorful(10));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;
