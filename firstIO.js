var fs = require('fs');

var toRead = fs.readFileSync(process.argv[2])
var strToRead = toRead.toString();
function howManyLines(str){
    let strArr = str.split('\n');
    return strArr.length-1;
}

console.log(howManyLines(strToRead));