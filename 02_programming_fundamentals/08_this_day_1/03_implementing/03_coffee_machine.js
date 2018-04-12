// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment
const machine = {
  litersOfCoffee: 0,
  nbClForExpresso: 8,
  nbClForLongCoffee: 15,

  fillWithLitersOfCoffee: function(nbLiters) {
    this.litersOfCoffee += nbLiters;
  },
  makeIt: function(nbCentiliters) {
    let centiliters = this.litersOfCoffee / 100;
    if (centiliters >= nbCentiliters) {
      centiliters -= nbCentiliters;
      this.litersOfCoffee = centiliters * 100;
      return true;
    } else {
      return false;
    }
  },
  expresso: function() {
    return this.makeIt(this.nbClForExpresso);
  },
  longCoffee: function() {
    return this.makeIt(this.nbClForLongCoffee);
  }
};
/*
machine.fillWithLitersOfCoffee(0.16);
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
/*
console.log(machine.longCoffee()) // => true
console.log(machine.litersOfCoffee) // => 9.77
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false
*/
module.exports = machine;
