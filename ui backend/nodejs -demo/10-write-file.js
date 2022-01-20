const fs = require('fs');
const path = require('path');

const contents = `
    <!doctype html>
    <html>
    <head>
    <title>Hello fs module</title>
    </head>
    <body>
    <h1>Hello fs module</h1>
    </body>
    </html>

`;

fs.readFile(path.join( __dirname, '..', 'hello.html'),contents,{encoding:'utf-8'},(err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(contents);
    });

//this line executes even before the file read
console.log('last line of script');

