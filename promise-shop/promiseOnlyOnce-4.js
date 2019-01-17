'use strict'
const promise = new Promise(function (fulfill,reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})

module.exports = ()=>promise;

function onReject(error){
    console.log(error.message);
}

promise.then(console.log,onReject);