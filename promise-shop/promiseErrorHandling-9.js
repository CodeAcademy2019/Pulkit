const promise = (value)=>
{
    console.log(value);
    var promise = new Promise(function (fulfill,reject)
    {
        try{
            fulfill(JSON.parse(value));
        }catch(e){
            reject(new Error('Unable to parse json'));
        }
    })
    promise.then(console.log,(error)=>{console.log(error.message);});
    return promise;
}
promise(process.argv[2]);
module.exports =promise;


