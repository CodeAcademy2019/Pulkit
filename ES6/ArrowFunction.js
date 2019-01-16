module.exports = ()=>{
var inputs = process.argv.slice(2);
if(inputs.length==0)return "Empty array passed";
if(inputs.some(function checkForNullOrUndefined(value){
    return value==null || value==undefined;
}))
{
    return "undefined or null value in array";
}
var result = inputs.map((string)=> string.charAt(0))
                    .reduce((firstString,secondString)=>firstString+secondString);
console.log(`[${inputs}] becomes "${result}"`);
return `[${inputs}] becomes "${result}"` ;
}
