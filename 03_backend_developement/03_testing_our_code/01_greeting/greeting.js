function greet(name) {
  let greetingName = name;

  if (name === undefined) {
    greetingName = "World";
  }

  return `Hello ${greetingName.toUpperCase()}!`;
}

module.exports = greet;
