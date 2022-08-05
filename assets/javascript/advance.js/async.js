const fs = require("fs");
const pr = require("fs/promises");

function readFile() {
  fs.readFile("data.txt", function(error, fileData) {
    console.log("File Parsing Done!");
    console.log(fileData.toString());
  });

  pr.readFile("data.txt").then(function(fileData) {
    console.log("Again Parsing Done!");
    console.log(`msg: ${fileData.toString()}`);
  });
 
  console.log("Hi");
}

readFile();
