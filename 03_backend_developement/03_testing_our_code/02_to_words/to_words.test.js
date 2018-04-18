const toWords = require("./to_words");

test("Split the sentence 'Hello my world'", function() {
  const result = toWords("Hello my world");
  expect(result).toEqual(["Hello", "my", "world"]);
});

test("Test with an empty sentence", function() {
  const result = toWords();
  expect(result).toEqual([]);
});
