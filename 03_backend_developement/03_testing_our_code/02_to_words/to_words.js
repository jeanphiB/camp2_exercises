function toWords(sentence) {
  let allWords;
  if (!sentence) {
    allWords = [""];
  } else {
    allWords = sentence.split(/[.?!, :]+/);
  }

  return allWords.filter(word => word !== "");
}

module.exports = toWords;
