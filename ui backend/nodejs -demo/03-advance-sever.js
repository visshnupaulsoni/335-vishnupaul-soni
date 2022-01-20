const { read, write } = require('fs');
const http = require('http');
const url=require('url');
 const server = http.createServer(( req,res) => {
    //
    
    const urlParts = url.parse(req.url,true);//url.parse("hello?format=upper")
    console.log(urlParts);

    const word = urlParts.pathname.substring( 1 );
    let formattedWord;

    if(urlParts.query.format =='upper'){
        formattedWord = word.toUpperCase();
    }else if(urlParts.query.format =='lower'){
        formattedWord = word.toLowerCase();
    }else{
        formattedWord = word;
        }

     res.write(formattedWord + 'chrome');
//show Date 
     if(urlParts.query.showDate == 'true'){
       const date = new Date().toDateString();
       res.write(date);
     }

    let date = new Date().toDateString();
    res.write(date);
    
    res.end();
});

 

 server.on("listening",() =>{
     console.log('serve is running on http://localhost:3000/');
 });
 
 server.on("error",(err) => {
     console.log(err.message)
 });
 //port number>1027
 server.listen(3000);