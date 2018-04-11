/*
Your Finder is a little bit cheap, let's add some killer-features !

First things first, write a NodeJS program which can display the current directory.

Eg:

❯ node my-finder.js
0. ../
1. my_folder_1/
2. my_folder_2/
3. my_file_1
4. my-finder.js
5. README.md
Then, ask the a question to the user. It should choose a number available at the screen.

If the input refer to a directory, then go to display the content of this directory.

❯ node my-finder.js
0. ../
1. my_folder_1/
2. my_folder_2/
3. my_file_1
4. my-finder.js
5. README.md

Choose a number > 2

0. ../
1. my_sub_folder_1/
2. a_sample_text_file.txt

Choose a number >
Else, if the input refer to a file, display the content of the file.

Eg:

0. ../
1. my_sub_folder_1/
2. a_sample_text_file.txt

Choose a number > 2

I\'m a text file ! Youhou!

    Navigating through our files has never been so enjoyable!
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

function finder(chosenPath) {
  let newPath = path.resolve(chosenPath);
  let dirContent = getDirContent(newPath);

  console.log(getMenuFromArray(newPath, dirContent));

  reader.question("Choose a number > ", inputOption => {
    let result;

    if (inputOption == "") {
      reader.close();
      return;
    } else if (inputOption < 0 || inputOption >= dirContent.length) {
      console.log(`The number must be between 0 and ${dirContent.length - 1}`);
    } else if (isNaN(inputOption)) {
      console.log("This was not a number");
    } else {
      let option = parseInt(inputOption, 10);
      chosenPath = newPath + path.sep + dirContent[option];
      if (fs.statSync(chosenPath).isDirectory()) {
        newPath = chosenPath;
      } else {
        data = fs.readFileSync(chosenPath, "utf8");
        console.log(data);
      }
    }
    finder(newPath);
  });
}

finder(".");

module.exports = finder;
