const HTTP = require('q-io/http');
let link1 = 'http://localhost:7000';
let link2 = 'http://localhost:7001';
function getJsonObject(link1,link2)
{
    let resolveFirst;
    let promise1 = new Promise(function (resolve,reject)
    {
        resolveFirst = resolve;
    })
    HTTP.read(link1).then(function resolveFirstVal(value)
    {
        resolveFirst(value);
    })
    let resolveSecond;
    let promise2 = new Promise(function (resolve,reject)
    {
        resolveSecond = resolve;
    })
    promise1.then((id)=>{
        HTTP.read(link2+'/'+id.toString()).then((value)=>{
            resolveSecond(value);
        })
    })
    return promise2;  
}

getJsonObject(link1,link2).then((value)=>{
    console.log(JSON.parse(value));
})