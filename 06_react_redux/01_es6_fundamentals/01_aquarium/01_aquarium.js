// Insert code here
class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  passTime() {
    console.log("Algaes number: ", this.algaes.length);
    this.fishes.forEach(fish => console.log("Fish name: ", fish.name, " - sex: ", fish.sex));
    this.fishes.forEach((fish, thisArg) => {
      fish.eat(this, thisArg);
    });
  }

  endTurn() {
    while(this.fishes.length > 1) {
      this.passTime();
    }
  }
}

class Fish {
  constructor(name, sex, vegan) {
    this.name = name;
    this.sex = sex;
    this.vegan = vegan;
  }

  eat(aquarium, thisArg) {
    if (this.vegan) {
      aquarium.algaes.pop();
      console.log("1 algea eated. Let ", aquarium.algaes.length);
    } else {
      let eaten = false;
      while(aquarium.fishes.length > 1 && !eaten) {
        const randomFish = Math.round(Math.random() * aquarium.fishes.length);
        if (aquarium.fishes[randomFish] !== thisArg) {
          aquarium.fishes.splice(randomFish, 1);
          console.log("fish id", randomFish, " eaten. Let ", aquarium.fishes.length);
          eaten = true;
        }
      }
    }
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }
}

// const newCarnFish = new Fish("Lorem", "M", 0);
// const newVeganFish = new Fish("Lorem", "M", 1);
// const newAlgae = new Algae(12);
// const newAquarium = new Aquarium([newVeganFish, newCarnFish], [newAlgae]);
// newAquarium.endTurn();

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
