const aaencode = require("./src/aaencode");
const aadecode = require("./src/aadecode");

const script = "console.log(\"Hello World\");";
const encodedScript = aaencode(script);
const decodedScript = aadecode(encodedScript);

if (script === decodedScript) {
  console.log("Success!");
}

console.log(script, encodedScript);