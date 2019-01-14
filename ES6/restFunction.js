module.exports = (...arg) => {
    var result = arg.reduce((firstValue,secondValue)=>firstValue+secondValue,0);
    return result/arg.length;
};