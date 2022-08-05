const fs = require("fs");
const pr = require("fs/promises");

function readFile() {
  fs.readFile("data.txt", function(error, fileData) {
    if(error) {
      console.log(error.message);
    }
    console.log("File Parsing Done!");
    console.log(fileData.toString());
  });

  pr.readFile("data.txt").then(function(fileData) {
    console.log("Again Parsing Done!");
    console.log(`msg: ${fileData.toString()}`);
  }).catch(function(error) {
    console.log(error.message);
  });
 
  console.log("Hi");
}

readFile();
