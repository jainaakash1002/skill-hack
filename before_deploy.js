var fs = require("fs");
var path = require("path");

fs.copyFile(
  path.join(__dirname + "/package.json"),
  path.join(__dirname + "/build/package.json"),
  function (err) {
    if (err) throw new Error(err);
    console.log("package.json copied..");
  }
);

fs.copyFile(
  path.join(__dirname + "/main.deploy.sh"),
  path.join(__dirname + "/build/main.deploy.sh"),
  function (err) {
    if (err) throw new Error(err);
    console.log("main.deploy.sh copied..");
  }
);

fs.copyFile(
  path.join(__dirname + "/main.ecosystem.config.js"),
  path.join(__dirname + "/build/main.ecosystem.config.js"),
  function (err) {
    if (err) throw new Error(err);
    console.log("main.ecosystem.config.js copied..");
  }
);
