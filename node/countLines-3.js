const fs = require('fs');
const readFile = ()=>{
    let fileRead = fs.readFileSync(process.argv[2]);
    let file = fileRead.toString().split('\n');
    //console.log(file);
    const lineCount = file.length-1;
    console.log(lineCount);
    return lineCount;
} 
//readFile();
module.exports = readFile;
