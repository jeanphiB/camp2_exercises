/*
In many ways, Finder is a sadly unergonomic software.
I suggest you realize the feat of doing even worse by
implementing your own Finder.

Let's go for the worst user experience of history!

If you select a directory (except for ../):

A menu will display the following options:

    Open : to open the directory;
    Copy : to open a new prompt and to perform a copy of the directory into another directory;
    Move : to open a new prompt and to move the directory into another directory;

If you select a file:

    A menu will display the following options:

        Open : Read and display the content of the file;
        Copy : to open a new prompt and to perform a copy of the file into another place;
        Move : to open a new prompt and to move the file into another file;
*/


const path = require("path");
const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getDirContent(pathValue) {
  let dirContent = fs.readdirSync(pathValue).filter(name => !name.startsWith("."));
  dirContent.unshift("..");
  return dirContent;
}

function getMenuFromArray(pathValue, dirContent) {
  let stringMenu = "";
  for(let i = 0; i < dirContent.length; i++) {
    let stat = fs.statSync(pathValue + path.sep + dirContent[i]);
    stringMenu += `${i}. ${dirContent[i]}`;
    if (stat.isDirectory()) {
      stringMenu += "/";
    }
    stringMenu += "\n";
  }
  return stringMenu;
}

function useSelection(inputOption, currentPath, dirContent) {
  if (inputOption < 0 || inputOption >= dirContent.length) {
    console.log(`The number must be between 0 and ${dirContent.length - 1}`);
  } else if (isNaN(inputOption)) {
    console.log("This was not a number");
  } else {
    return chosenPath = currentPath + path.sep + dirContent[parseInt(inputOption, 10)];
  }
}

function finder(currentPath, action) {
  //let newPath = path.resolve(currentPath);
  let stringQuestion;

  if (action === "List") {
    let dirContent = getDirContent(currentPath);
    console.log(getMenuFromArray(currentPath, dirContent));
    stringQuestion = "Choose a number > ";
  } else {
    stringQuestion = "Open\nCopy\nMove\n";
  }

  reader.question(stringQuestion, inputOption => {
    let result;

    if (inputOption == "") {
      reader.close();
      return;
    } else if (action === "List") {
      let newPath = useSelection(inputOption, currentPath, dirContent);
      if (newPath === undefined) {
        finder(currentPath, "List");
      } else {
        finder(newPath, "Menu");
      }
    } else if (action === "Menu") {
      switch (action.substring(0, 1)) {
        case "O":
          if (fs.statSync(currentPath).isDirectory()) {
            finder(currentPath, "List");
          } else {
            console.log(fs.readFileSync(currentPath, "utf8"));
            finder(path.dirname(currentPath), "List");
          }
          break;

        case "C":

          break;

        case "M":

          break;

        default:
      }
    }
  });
}

finder(".", "List");

module.exports = finder;
