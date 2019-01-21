const HTTP = require("q-io/http");
let link = 'http://localhost:1337/';
function readData(link)
{
let resolvePromise;
let promise  = new Promise(function (resolve,reject){
    resolvePromise = resolve;
})
HTTP.read(link).then((value)=>{
    console.log(JSON.parse(value));
    resolvePromise(JSON.parse(value));
});
return promise;
}
module.exports = readData;
