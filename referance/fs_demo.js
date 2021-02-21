const fs = require('fs');
const path = require('path');

// create  folder
// fs.mkdir(path.join(__dirname,'/test'),{},err =>{
//     if(err)throw err;
//     console.log('folder created ...')
// });


// create and write to  file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world!',err =>{
//     if(err)throw err;
//     console.log('file written to ...')
// });

// // append and write to  file
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'i love html',err =>{
//     if(err)throw err;
//     console.log('file written to ...')
// });

//Read file write

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err, data) =>{
//     if(err)throw err;
//     console.log(data)
// });

//file rename

fs.rename(path.join(__dirname,'/test','hello.txt'),
         path.join(__dirname,'/test','modify.txt'),
         (err) =>{
                     if(err)throw err;
                      console.log(' file rename ...');
            });