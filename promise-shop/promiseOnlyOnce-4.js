'use strict'

const doPromise = ()=>{
    const promise = new Promise(function (fulfill,reject){
        fulfill('I FIRED');
        reject(new Error('I DID NOT FIRE'));
    })
    return promise;
}

function onReject(error){
    console.log(error.message);
    return error.message;
}

module.exports = {doPromise,onReject};

doPromise().then(console.log,onReject);