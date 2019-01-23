const fs = require('fs');
const callback = (data)=>{
    var res = '';
    data.forEach((element) => {
        console.log(element);
        res+=element;
    });
    return res;
}
const filterList = (list,filterKey)=>{
    return list.reduce((accumulator,current)=>{
        if(current.endsWith('.'+filterKey))
        {
            accumulator.push(current);
        }
        return accumulator;
    },[])
}
const readDir = (callback)=>{
    const path = process.argv[2];
    fs.readdir(path,(err,files)=>{
        if(err)
        {
            callback(['error while reading']);
        }else{
            const finalList = filterList(files,process.argv[3])
            callback(finalList);
        }
    })
}
//readDir(callback);
module.exports= {readDir,filterList,callback}