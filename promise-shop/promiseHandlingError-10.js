const alwaysThrows = ()=>{
    throw new Error("OH NOES");
}
const iterate = (value)=>{
    console.log(value);
    return value+1;
}
let promise1 = ()=>{
    return Promise.resolve(iterate(1));
}
promise1();
let promise2 = ()=>{
    return promise1().then(iterate);
}
promise2();
let promise3 = ()=>{
    return promise2().then(iterate);
}
promise3();
let promise4 = ()=>{
    return promise3().then(iterate);
}
promise4();
let promise5 = ()=>{
    return promise4().then(iterate);
}
promise5();
const promise6 = ()=>{
    return promise5().then(alwaysThrows);
}
const promise7 = ()=>{
    return promise6().then(iterate).then(iterate).then(iterate).then(iterate).then(iterate);
}
promise7().then(null,(err)=>{
    console.log(err.message);
    });

module.exports = {promise1,promise2,promise3,promise4,promise5,promise6,promise7};