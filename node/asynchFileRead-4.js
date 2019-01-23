const fs = require('fs');
function call(mssg)
{
   console.log(mssg);
}
const countLines = (file)=>{
   return file.toString().split('\n').length-1;
}
const readFile = (callback)=>{
    let fileRead = fs.readFile(process.argv[2],'utf8',(err,file)=>{
        if(err)
        {
            callback(new Error('file reading error'));
        }else{
            let numOfLines = countLines(file);
            callback(numOfLines);
        }
    });
} 
//readFile(call);
//console.log(readFile());
module.exports = {readFile,call,countLines};