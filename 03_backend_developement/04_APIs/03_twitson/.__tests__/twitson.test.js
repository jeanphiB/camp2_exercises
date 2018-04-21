const twitson = require("../twitson");
/*
describe("#getTwitsAndAnalyse()", () => {
  it("should print analyse", done => {
    expect.assertions(1);
    console.log = jest.fn();

    twitson.getTwitsAndAnalyse("jstrachan");

    setTimeout(function() {
      expect(console.log).toHaveBeenCalledWith("11.31°C");
      done();
    }, 200);
  });
});
*/
describe("#analyseTextArray()", () => {
  it("should print analyse of text", done => {
    twitson.analyseTextArray(["What a beautifull day today"]);

    expect.assertions(1);
    console.log = jest.fn();
    twitson.analyseTextArray(["What a beautifull day today"]);
    setTimeout(function() {
      expect(console.log).toHaveBeenCalledWith("positive");
      done();
    }, 200);
  });
});
