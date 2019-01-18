const alwaysThrows = ()=>{
    throw new Error("OH NOES");
}
const iterate = (value)=>{
    console.log(value);
    return value+1;
}
let promise1 = Promise.resolve(iterate(1));
let promise2 = promise1.then(iterate);
let promise3 = promise2.then(iterate);
let promise4 = promise3.then(iterate);
let promise5 = promise4.then(iterate);
let promise6 = promise5.then(alwaysThrows);
let promise7 = promise6.then(iterate).then(iterate).then(iterate).then(iterate).then(iterate);
promise7.then(null,(err)=>{
    console.log(err.message);
    });

module.exports = {promise1,promise2,promise3,promise4,promise5,promise6,promise7};