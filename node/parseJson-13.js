const http = require('http');
const url = require('url');
const parseTime = (date)=>
{
    const jsonObject = {
        "hour":date.getHours(),
        "minute":date.getMinutes(),
        "second":date.getSeconds()
    }
    return jsonObject;
}
const unixTime = (date)=> {
    const jsonObject = {
        "unixtime":date.getTime()
    }
    return jsonObject;
}
const callback = (request,response)=>{
    if(request.method==='GET')
    {
        let parsed = url.parse(request.url,true);
        if(parsed.pathname==='/api/parsetime')
        {
            response.writeHead(200,{'Content-Type':'application/json'});
            //console.log(parsed.query.iso);
            const date = new Date(parsed.query.iso);
           response.write(JSON.stringify(parseTime(date)));
        }else if(parsed.pathname ==='/api/unixtime')
        {
            const date = new Date(parsed.query.iso);
            response.writeHead(200,{'Content-Type':'application/json'});
           response.write(JSON.stringify(unixTime(date)));
        }else{
            response.writeHead(401);
        }
        response.end();
    }
}


const getServer = http.createServer(callback);
getServer.listen(process.argv[2]);
getServer.on('connection',()=>{
    console.log('connected');
})