const promiseResolve = ()=>{
    let resolve = Promise.resolve('Resolved');
    return resolve;
}
const promiseReject =()=>{
    let reject = Promise.reject(new Error('Rejected'));
    return reject;
}
module.exports = {promiseResolve,promiseReject};
promiseReject().catch((error)=>{
    console.log(error.message);
})
promiseResolve().then(console.log);