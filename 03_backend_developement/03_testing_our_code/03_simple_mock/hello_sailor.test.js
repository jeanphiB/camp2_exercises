const helloSailor = require("./hello_sailor");

test("Test if message send is diplayed in the console", function() {
  console.log = jest.fn();
  helloSailor("guy! Have nice break");
  expect(console.log).toHaveBeenCalledWith("Howdy guy! Have nice break!");
});

test("Test if the default message is diplayed in the console", function() {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
