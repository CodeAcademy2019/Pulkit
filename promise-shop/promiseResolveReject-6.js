
let promiseResolve = Promise.resolve('Resolved');
let promiseReject = Promise.reject(new Error('Rejected'));
module.exports = {promiseResolve,promiseReject};
promiseReject.catch((error)=>{
    console.log(error.message);
})
promiseResolve.then(console.log);