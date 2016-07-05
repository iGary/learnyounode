var fs = require('fs');
var argsFile = process.argv[2];

var argsBuffer = fs.readFileSync(argsFile);
var argsString = argsBuffer.toString();

var stringArray = argsString.split('\n');
var numOfNewLines = stringArray.length - 1;

console.log(numOfNewLines);