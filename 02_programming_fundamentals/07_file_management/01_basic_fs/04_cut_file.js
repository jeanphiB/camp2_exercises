const fs = require("fs");

// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)

function cutPaste(sourceFilename, targetFilename) {
  let result = false;

  if(!fs.existsSync(sourceFilename)) {
    console.warn(`file ${sourceFilename} doesn't exist.`);
  } else {
    let stats = fs.statSync(sourceFilename);
    if(!stats.isFile()) {
      console.warn(`${sourceFilename} is not a file.`);
    } else if(fs.existsSync(targetFilename)) {
      console.warn(`file ${targetFilename} already exist.`);
    } else {
      fs.copyFileSync(sourceFilename, targetFilename);
      if(!fs.existsSync(targetFilename)) {
        console.warn(`unable to write the file ${targetFilename}.`);
      } else {
        fs.unlinkSync(sourceFilename);
        if(fs.existsSync(sourceFilename)) {
          console.warn(`unable to delete the file ${sourceFilename}.`);
        } else {
          result = true;
        }
      }
    }
  }
  return result;
}

//console.log(cutPaste("test.txt", "test1.txt"));

module.exports = cutPaste;
