
var attachTitle = function (name){
    return 'DR. '+name;
}
var promise = new Promise((fulfill,reject)=>{
    fulfill('MANHATTAN');
})

const resultString = promise.then(attachTitle);
resultString.then(console.log);
module.exports = {promise,attachTitle,resultString};