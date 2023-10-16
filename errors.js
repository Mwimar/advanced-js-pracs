const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.JSON");
  } catch {
    console.log("Reading error");
  }
  console.log("Wassup!");
}
readFile();
