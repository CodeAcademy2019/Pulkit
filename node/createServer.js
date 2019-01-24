const http = require('http');
const callback = (request,response)=>{
    response.setHeader('Content-Type','text/plain');
    if(request.url==='/hello')
    {
        response.write('Hello');
    }else if(request.url ==='/world')
    {
        response.write('World');
    }else{
        response.write('No resource found');
    }
    response.end();
}
const server = ()=>{
    const serve = http.createServer(callback);
    serve.listen(process.argv[2]);
}
server();