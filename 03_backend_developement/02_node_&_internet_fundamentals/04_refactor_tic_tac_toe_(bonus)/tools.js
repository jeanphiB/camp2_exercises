function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
}

function isNotNull(value) {
  return value !== null;
}

module.exports = {
  flattenArray: flattenArray,
  isNotNull: isNotNull
};
