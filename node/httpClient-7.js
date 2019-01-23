const http = require('http');
const callback = (response)=>{
    response.setEncoding('utf8').on('data',function(data)
    {
        console.log(data);
    })
}
const httpClient = ()=>{
    http.get(process.argv[2],callback)
}
httpClient();
module.exports = httpClient;