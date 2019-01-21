const first = ()=>{
    return new Promise((fulfill,reject)=>{
    fulfill('c0d50a34e88cc3eb9ed36544c5d482769025c18');
    });
}
const second = (value)=>{
    return new Promise((fulfill,reject)=>{
        fulfill(value+'b');
    })
}
const secretPromise = ()=>{return first().then(function (value){
    return second(value);
});}
secretPromise().then(console.log);
module.exports = {secretPromise,first,second};
