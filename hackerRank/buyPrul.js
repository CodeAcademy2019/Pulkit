let i = 0;
function returnSumArray(yards,arr)
{
    let arrRes = [];
    while(yards!=0)
    {
        var arr2 = [];
        console.log(arr);
        let tmp = arr[i].split(' ').map((value)=>parseInt(value));
        let sum = 0;
        for(var k = 0;k<tmp[0];k++)
        {
            sum+=(10-tmp[k+1]);
            arr2.push(sum);
        }
        arrRes.push(arr2);
        --yards;
        i++;
    }
    return arrRes;
}
function solveSingle(arr)
{
    var max=-1;
    var maxSum=0;
    var extra = [];
    for(var k = 0;k<arr.length;k++)
    {
        if(arr[k]>maxSum)
        {
            maxSum = arr[k];
            max = k;
        }

    }
    for(var l=max+1;l<arr.length;l++)
    {
        if(arr[l]==maxSum)
        {
            extra.push(l-max);
        }
    }
    return [maxSum,max+1].concat(extra);
    }


function solveArrays(arr)
{
    var extra = [];
    let profit = 0;
    let countTill = 0;
    for(var l = 0;l<arr.length;l++)
    {
        var data = solveSingle(arr[l]);
        profit+=data[0];
        countTill+=data[1]
        var tmp = data.slice(2);
        if(tmp.length!=0){
         extra.push(tmp.sort());
        }
    }
    return [profit,countTill];//.concat(extra);
    
}
console.log(solveArrays([[1,8,13]]));


function printMaxProfit(string)
{
    //console.log(string)
  let arr = string.split(/\r?\n/);
  
  let count = 1;
  let cs = parseInt(arr[i]);
  i++;
  let arrRes = [];
  var result = '';
  var res;
  while(cs!=0){
    //var result = '';
    var tmp = returnSumArray(cs,arr);
    res = solveArrays(tmp);
    result += count.toString()+`
    `+res[0].toString()+`
    `+res[1].toString();
    console.log('result:',result);
    cs = parseInt(arr[i]);
    count++;
    
    i++;
  }
  return result

}

printMaxProfit(`3
3 19 9 2
5 20 11 10 7 1
2 18 2
0`)

module.exports = {printMaxProfit,solveArrays,solveSingle,returnSumArray};





