module.exports = (...arg) => {
    if(arg.length==0)return 'empty array';
    if(arg.some((value)=>isNaN(value)))
    {
        return 'not a number';
    }
    var result = arg.reduce((firstValue,secondValue)=>firstValue+secondValue,0);
    return (result/arg.length).toFixed(2);
};