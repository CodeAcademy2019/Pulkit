const http = require('http');
let result = '';
const callback1 = (response)=>{
    response.on('data',(data)=>{
        result +=data;
    })
    response.on('end',()=>{
        result +='\n';
        http.get(process.argv[3],callback2);
    })
}
const callback2 = (response)=>{
    response.on('data',(data)=>{
        result+=data;       
    })
    response.on('end',()=>{
        result+='\n';
        http.get(process.argv[4],callback3);
    })
}
const callback3 = (response)=>{
    response.on('data',(data)=>{
        result+=data;
        //console.log(result);
    })
    response.on('end',()=>{
        console.log(result);
    })
}

const makeRequest = ()=>{
    http.get(process.argv[2],callback1);
}
makeRequest();
module.exports = makeRequest;