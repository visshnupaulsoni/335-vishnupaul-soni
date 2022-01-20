const fs = require('fs');
const path = require('path/posix');
('path');

//
fs.readFile('04-arithmetic-demo.js',(err,contents ) =>{
if (err) {
    console.log(err.message);
    return;
}
//contents is buffer-raw sequence

console.log( contents);
});
//pass the file encoding as the second argument
fs.readFile(path.join( __dirname, '..', 'references-nodejs-express.md')
,'utf-8',(err,contents) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(contents);
    });

//this line executes even before the file read
console.log('last line of script');

