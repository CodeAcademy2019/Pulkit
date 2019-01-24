const net = require('net');
const strftime = require('strftime');
const callback = (socket)=>{
    const res= strftime('%F %R',new Date());
    socket.end(res+'\n');
}
const timeServer = ()=>{
    let server = net.createServer(callback);
    server.listen(Number(process.argv[2]));
}
timeServer();
module.exports = timeServer;



