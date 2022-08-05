const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(error.message);
  }
  console.log("Hi");
}

readFile();
