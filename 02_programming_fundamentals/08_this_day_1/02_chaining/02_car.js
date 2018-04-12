// See Sparta courses for the exercise summary
const car = {
  speed: 0,
  distance: 0,
  start: function() {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function(value) {
    this.speed = value;
    return this;
  },
  drive: function(value) {
    this.distance += this.speed * value;
    return this;
  },
  showDistance: function() {
    console.log(`${this.distance / 60} Km`);
  }
};

//car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
