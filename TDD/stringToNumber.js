function stringToNum(string)
{
    if(string===undefined)
        return 'undefined input';
    if(!string)
        return 'Null Object';
    return Number(string);
}
module.exports = stringToNum;