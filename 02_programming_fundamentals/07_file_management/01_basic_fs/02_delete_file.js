const fs = require("fs");

// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

function deleteFile(filename) {
  let result = false;

  if(!fs.existsSync(filename)) {
    console.warn(`file ${filename} doesn't exist.`);
  } else {
    let stats = fs.statSync(filename);
    if(!stats.isFile()) {
      console.warn(`${filename} is not a file.`);
    } else {
      fs.unlinkSync(filename);
      if (fs.existsSync(filename)) {
        console.warn(`unable to delete ${filename}.`);
      } else {
        result = true;
      }
    }
  }
  return result;
}

//console.log(deleteFile("test2.txt"));

module.exports = deleteFile;
