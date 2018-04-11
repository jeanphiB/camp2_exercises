const fs = require("fs");

// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.

function touch(filename) {
  fs.writeFile(filename, "", (error) => {
    if (error) {
      console.warn(error);
    }
  });
}

//touch("test3.txt");

module.exports = touch;
