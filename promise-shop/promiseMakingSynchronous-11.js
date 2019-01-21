function all(firstPromise,secondPromise)
{
    if(firstPromise==undefined || secondPromise==undefined || firstPromise==null || secondPromise==null){
        return 'Please pass proper arguments';
    }
    let firstValue,secondValue;
    let count=0;
    let resolve;
    const promise = new Promise(function (fulfill,reject){
        resolve = fulfill;
    });
    firstPromise.then((value)=>{
        firstValue = value;
        count++;
    }).then(()=>{
        if(count==2){
            resolve([firstValue,secondValue]);
        }
    })
    secondPromise.then((value)=>{
        secondValue = value;
        count++;
    }).then(()=>{
        if(count==2){
            resolve([firstValue,secondValue]);
        }
    })
    return promise;
}
//all(getPromise1(),getPromise2()).then(console.log);

//for testing purpose
const getPromise1 = ()=>{
    return new Promise(function (resolve,reject){
        resolve('Peter');
    })
}
const getPromise2 = ()=>{
    return Promise.resolve('Petegrew');
}
module.exports = {all,getPromise1,getPromise2};

