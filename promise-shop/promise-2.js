
const timeOut =  function (fulfill, reject) {
    setTimeout(()=>{fulfill('FULFILLED!')},5000);
 };
const promise = new Promise(timeOut);
const didPromise = function doPromise(){
    return promise;
}
promise.then((value)=>{
    console.log(value);}
)
module.exports = {didPromise,timeOut}
