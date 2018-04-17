const container = require("./container.js");

const machine = {
  fillWithLitersOfCoffee: function(nbLiters) {
    container.putLitersOfCoffee(nbLiters);
  },
  makeIt: function(nbLiters) {
    return container.consumeLitersOfCoffee(nbLiters);
  },
  expresso: function() {
    return this.makeIt(0.08);
  },
  longCoffee: function() {
    return this.makeIt(0.15);
  }
};

machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false

module.exports = machine;
