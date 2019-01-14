var inputs = process.argv.slice(2);
var result = inputs.map((string)=> string.charAt(0))
                    .reduce((firstString,secondString)=>firstString+secondString);
console.log(`[${inputs}] becomes "${result}"`);