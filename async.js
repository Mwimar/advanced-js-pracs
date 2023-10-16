const fs = require("fs");

function readFile() {
  let fileData;
  fileData = fs.readFile("data.txt", function () {
    console.log("file reading done");
    console.log(fileData.toString());
  });

  console.log("Wassup");
}
readFile();
