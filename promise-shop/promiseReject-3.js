
const promiseValue = (fulfill, reject) =>{
  setTimeout(()=>{
      reject(new Error('REJECTED!'));
  },300);
 };

const promise = new Promise(promiseValue);

const doPromise = ()=>{
  return promise;
}
function onReject (error) {
    console.log(error.message);
    return error.message;
}

promise.then(null,onReject);

module.exports = {doPromise,onReject};