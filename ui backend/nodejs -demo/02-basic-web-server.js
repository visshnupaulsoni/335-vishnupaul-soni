const { write } = require('fs');
const http = require('http');


 const server = http.createServer(( req,res) => {
    res.write('hello,node\n');
    res.write('how are you node?\n');
    res.write('bye');
    res.end();
});

//server is an "event emitter"
//all events emitters will hava a method called "on"
//some eents of the HTTP server are "listening" ,"request"
server.on("request",( req,res) =>{
   console.log("received a request"); 
});

server.on("listening",() =>{
    console.log('serve is running on http://localhost:3000/');
});

server.on("error",(err) => {
    console.log(err.message)
});
//port number>1027
server.listen(3000);
