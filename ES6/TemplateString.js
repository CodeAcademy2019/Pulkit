function greetings(){
var name=process.argv[2];
//console.log(name);
if(name===null)
{
    name = "Null";
}else if(name === undefined)
{
    name = "Undefined";
}
if(!isNaN(name))name = name.toString();
return `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
}
module.exports = greetings;