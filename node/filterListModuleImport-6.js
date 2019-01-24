const fs = require('fs');
const filter = (list,filterKey)=>{
    return list.reduce((accumulator,current)=>{
        if(current.endsWith('.'+filterKey))
        {
            accumulator.push(current);
        }
        return accumulator;
    },[])
}
module.exports = (dir,filterKey,callback)=>
{
    fs.readdir(dir,(err,files)=>{
        if(err)
        {
            return callback(err,null);
        }
        return callback(null,filter(files,filterKey));
    })
}
