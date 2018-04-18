const greet = require("./greeting");

test("Say hello to FREDDY", function() {
  const result = greet("FREDDY");
  expect(result).toBe("Hello FREDDY!");
});

test("Say hello to Freddy must be converted to upper case", function() {
  const result = greet("Freddy");
  expect(result).toBe("Hello FREDDY!");
});

test("Say hello to noone must be hello world", function() {
  const result = greet();
  expect(result).toBe("Hello WORLD!");
});
