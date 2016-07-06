var fs = require('fs');

var directory = fs.readdir(process.argv[2], function(err, list) {
    var files = list.filter(function(filename) {
        var splitFile = filename.split('.');
        var ending = splitFile[splitFile.length - 1];
        if (ending == 'md' && splitFile.length != 1) {
            console.log(filename);
            return true;
        }
    });
});