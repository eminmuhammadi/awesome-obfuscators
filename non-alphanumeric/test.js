const obfuscate = require('./src/encode');

const script = "console.log(\"Hello World\");";

console.log(obfuscate(script));