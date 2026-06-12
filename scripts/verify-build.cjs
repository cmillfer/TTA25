const fs = require("fs");

if (!fs.existsSync("dist/index.html")) {
  console.error("dist/index.html missing after build");
  process.exit(1);
}

console.log("Build OK:", fs.readdirSync("dist"));