let centilitersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters) {
  centilitersOfCoffee += numberOfLiters * 100;
}

function consumeLitersOfCoffee(numberOfLiters) {
  const numberOfCentiLiters = numberOfLiters * 100;
  if (centilitersOfCoffee >= numberOfCentiLiters) {
    centilitersOfCoffee -= numberOfCentiLiters;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
