var fs = require('fs');
var target = process.argv.slice(3)[0];

fs.readdir(process.argv[2], function(err, files){
    files.forEach(function(singleFile){
        if (singleFile.slice(singleFile.length-target.length) === target && singleFile.length > target.length) console.log(singleFile);
    })
});