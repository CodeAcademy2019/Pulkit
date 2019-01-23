const http = require('http');
const fs = require('fs');
const callback = (request,response)=>{
    response.setHeader('Content-Type','text/plain');
    let fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(response);
    //response.end();
}
const createHTTPServer  = ()=>{
    const server = http.createServer(callback);
    server.listen(process.argv[2]);
    server.on('connection',()=>{
        console.log('requested');
    })
}
module.exports  = createHTTPServer;
createHTTPServer();