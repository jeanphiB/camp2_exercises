const fs = require("fs");

/*
Copy / Paste is one of the combinations that I use the most daily!
Implement this feature in our module (it will undoubtedly be very useful!)
with a function : copyPaste(sourceFilename, targetFilename).
*/

function copyPaste(sourceFilename, targetFilename) {
  let result = false;

  if(fs.existsSync(targetFilename)) {
    console.warn(`file ${targetFilename} already exist.`);
  } else if(!fs.existsSync(sourceFilename)) {
    console.warn(`file ${sourceFilename} doesn't exist.`);
  } else {
    let stats = fs.statSync(sourceFilename);
    if(!stats.isFile()) {
      console.warn(`${sourceFilename} is not a file.`);
    } else {
      fs.copyFileSync(sourceFilename, targetFilename);
      if(!fs.existsSync(targetFilename)) {
        console.warn(`unable to write the file ${targetFilename}.`);
      } else {
        result = true;
      }
    }
  }
  return result;
}

console.log(copyPaste("test.txt", "test2.txt"));

module.exports = copyPaste;
