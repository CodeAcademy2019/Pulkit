const bl = require('bl');
const http = require('http');
const callback = (response)=>{
    response.pipe(bl((err,data)=>{
        if(err)
        {
            console.log('Errored');
        }else{
            const string = data.toString();
            console.log(string.length+'\n'+string);
        }
    }))
}
const httpClient = ()=>{
    http.get(process.argv[2],callback)
}
httpClient();
module.exports = httpClient;