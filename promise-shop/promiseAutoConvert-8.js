var attachTitle = function (name){
    return 'DR. '+name;
}
var createPromise = ()=>{
    return new Promise((fulfill,reject)=>{
    fulfill('MANHATTAN');
})}
const resultString = ()=>{
    return createPromise().then(attachTitle);
}
resultString().then(console.log);
module.exports = {createPromise,attachTitle,resultString};