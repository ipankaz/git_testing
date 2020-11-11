const fs = require('fs');
const http = require('http');

let file = fs.readFileSync('./HTML/forms_and_input_tags.html');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(file)
})


server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
})

