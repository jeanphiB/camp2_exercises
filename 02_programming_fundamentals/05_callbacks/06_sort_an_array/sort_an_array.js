// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  let sorted = unsortedArray;
  let finish = false;
  const max = sorted.length;

  while(!finish) {
    finish = true;
    for(let i = 0; i < max - 1; i++) {
      if (sorted[i] > sorted[i + 1]) {
        let value = sorted[i + 1];
        sorted[i + 1] = sorted[i];
        sorted[i] = value;
        finish = false;
      }
      if (sorted[max - i] < sorted[max - i - 1]) {
        let value = sorted[max - i - 1];
        sorted[max - i - 1] = sorted[max - i];
        sorted[max - i] = value;
        finish = false;
      }
    }
  }
  return sorted;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
