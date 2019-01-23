const http = require('http');
const map = require('through2-map');
const callback = (request,response)=>
{
    //console.log('inside');
    if(request.method === 'POST')
    {
        request.pipe(map((data)=>{
            return data.toString().toUpperCase();
        })).pipe(response);
    }else{
        response.end('please send only post requests!!!!');
    }
}
const postServer = ()=>{
    const server = http.createServer(callback);
    server.listen(process.argv[2]);
    server.on('connection',()=>{
        console.log('connected');
    });
}
postServer();