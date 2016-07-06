var fs = require('fs');
var argsFile = process.argv[2];

fs.readFile(argsFile, function(err, data) {
   var lines = data.toString().split('\n').length - 1;
    console.log(lines);
});