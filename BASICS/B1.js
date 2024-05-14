// import http transfer protocol
const http = require("http");

// set hostname and port where you want to listen
const hostname = "127.0.01";
const port= 4000;


// create a function as response has head and body "writeHead" is for body and "end" is for response that you want to  send
const server = http.createServer(function (req,res){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("hello world");
});

// maek your server listen at port,host
server.listen(port, hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});