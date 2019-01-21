const addNumbers = ()=>{
    //console.log(process.argv);
    let arr = process.argv.slice(2);
    let sum;

    sum = arr.reduce(function (accumulator,current){
        return accumulator+Number(current);
    },0)

    return sum;
}
console.log(addNumbers());
module.exports = addNumbers;