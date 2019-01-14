function operation(){}
function repeat(operation,num){
    if(num>0)
    {
        repeat(operation,num-1);
    }
}
module.exports = repeat;