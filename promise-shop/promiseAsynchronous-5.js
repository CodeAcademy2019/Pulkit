const resArray = [];
const execute=(string)=>
{
    resArray.push(string);
    console.log(string);
}

const createPromise = (data)=>{
    return new Promise(function (fulfill,reject){
        fulfill(data);
    }) 
};

function asynchPromise() {
    //;
    //const promise;
    const promise = createPromise('PROMISE VALUE');
    const finalPromise = promise.then(execute).then(()=>resArray);
    execute('MAIN PROGRAM');
    return finalPromise;
}
//asynchPromise();
module.exports = {asynchPromise,execute,createPromise};


