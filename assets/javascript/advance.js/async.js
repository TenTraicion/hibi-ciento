const fs = require("fs");
const pr = require("fs/promises");

async function readFile() {
  fs.readFile("data.txt", function(error, fileData) {
    if(error) {
      console.log(error.message);
    }
    console.log("File Parsing Done!");
    console.log(fileData.toString());
  });

  const fileData = await pr.readFile("data.txt")
    console.log("Again Parsing Done!");
    console.log(`msg: ${fileData.toString()}`);
 
  console.log("Hi");
}

readFile();
