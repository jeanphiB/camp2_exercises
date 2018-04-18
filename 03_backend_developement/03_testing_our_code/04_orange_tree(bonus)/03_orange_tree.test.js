const orangeTree = require("./03_orange_tree");

const maxAge = 101;

describe("Test the orange tree grow up and check its attributes", () => {
  for(let age = 0; age < maxAge; age++) {
    let message = "";
    if(age === 0) {
      message = "Seed an orange tree, the attributes are initial";
    } else if(age >= 50) {
      message = `Year ${age}, the orange tree stop to grow and may be dead`;
    } else if(age >= 100) {
      message = "From 100 years old, the tree is no more alive";
    } else {
      message = `Year ${age}, the orange tree must grow up`;
    }

    test(message, function() {
      expect.assertions(4);

      orangeTree.seed();
      for(let i = 0; i < age; i++) {
        orangeTree.ageOneYear();
      }

      if (age < 50) {
        expect(orangeTree.alive).toBe(true);
      } else if (age >= 100) {
        expect(orangeTree.alive).toBe(false);
      } else {
        expect(orangeTree.alive).not.toBeUndefined();
      }

      let height = 0;
      if (age < 10) {
        height = age * 25;
      } else if (age < 20) {
        height = 25 * 9 + 10 * (age - 9);
      } else {
        height = 25 * 9 + 10 * 10;
      }
      expect(orangeTree.height).toBe(height);

      let oranges = 0;
      if (age >=5 && age < 10) {
        oranges = 10;
      } else if (age >= 10 && age < 20) {
        oranges = 20;
      } else if (age >= 20 && age < 40) {
        oranges = 5;
      }
      expect(orangeTree.oranges).toBe(oranges);

      expect(orangeTree.age).toBe(age);
    });
  }
});

describe("Test the orange tree grow up and check the orange picking", () => {
  for(let age = 0; age < maxAge; age++) {
    let message = `Year ${age}, the orange tree has `;

    let oranges = 0;
    if(age >= 5 && age < 10) {
      oranges = 10;
    } else if(age >= 10 && age < 20) {
      oranges = 20;
    } else if(age >= 20 && age < 40) {
      oranges = 5;
    }
    if (oranges > 0) {
      message += `${oranges} pickable oranges`;
    } else {
      message += "no pickable orange";
    }

    test(message, function() {
      expect.assertions(2);

      orangeTree.seed();
      for(let i = 0; i < age; i++) {
        orangeTree.ageOneYear();
      }

      if (oranges === 0) {
        expect(orangeTree.oranges).not.toBe(1);
      } else {
        for(let i = 0; i < oranges; i++) {
          if (i + 1 === oranges) {
            expect(orangeTree.oranges).not.toBe(0);
          }
          orangeTree.pickAnOrange();
        }
      }
      expect(orangeTree.oranges).toBe(0);
    });
  }
});

describe("Additional tests", () => {
  test("should die before 100 years but after 50 years", () => {
    expect.assertions(3);

    orangeTree.seed();
    while(orangeTree.age <= 100 && orangeTree.alive) {
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(false);
    expect(orangeTree.age).toBeLessThanOrEqual(100);
    expect(orangeTree.oranges).toBe(0);
  });
});
