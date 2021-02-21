const http = require('http');
const path = require('path');
const fs = require('fs');
const { extname } = require('path');


const server = http.createServer((req,res)=>{
    let filePath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url);

    let extname= path.extname(filePath);
    console.log(filePath);
    res.end();
   
})

const PORT = process.env.PORT||5000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

















// -----------------for api handlling---------------------
// if(req.url==='/api/users'){
//     const users =[
//         {name:'Ajaj',age:40, Address:'lko'},
//         {name:'kumar',age:30,Address:'ljp'},
//         {name:'singh',age:90, Address:'lld'}
//     ];
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(users))

// }

// ---------------for show url page-------------------------------
// fs.readFile(path.join(__dirname,'public','index.html'),(err,
//     content)=>{
//         if(err) throw err ;
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end(content);     
// })


// -----for person------------
// const Person =require('./person');
// const person1 = new Person('kishan',32);
// person1.greeting();

// -----for Logger------------
// const Logger =require ('./logger');
// const logger = new Logger();
// logger.on('message',(data)=>console.log(`called Listener :`,data));
// logger.log('hello world');
// logger.log('hi');
// logger.log('hello');