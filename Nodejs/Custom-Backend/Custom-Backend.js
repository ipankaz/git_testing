const fs = require('fs');
const http = require('http');

let hostname = '127.0.0.1';

let home = fs.readFileSync('./Nodejs/home.html');
let About = fs.readFileSync('./Nodejs/About.html');
let Services= fs.readFileSync('./Nodejs/Services.html');

let server = http.createServer((req,res)=>{
    let url1 = req.url;
    console.log(url1);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    // res.end('hello')
    if(url1=='/'){
        res.end(home);
    }
    else if(url1=='/Nodejs/Services'){
        res.end(Services);
    }
    else if(url1=='/Nodejs/About'){
        res.end(About);
    }
    else{
        res.statusCode=404;
res.end("not found")
    }
})

server.listen(3000,hostname,()=>{
    console.log("listening on port 3000");
})
