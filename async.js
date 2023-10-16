const fs = require("fs/promises");
const util = require("util");

// function readFile() {
//   let fileData;
//   fileData = fs.readFile("data.txt", function (error, fileData) {
//     console.log("file reading done");
//     console.log(fileData.toString());
//   });

//   console.log("Wassup");
// }

async function readFile() {
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log("error found");
  }
  console.log(fileData.toString());
  console.log("parsing done");
}

readFile();
