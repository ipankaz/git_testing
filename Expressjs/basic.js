let express = require('express');
// console.log(express);
const app = express();

// req = request 
// res = response 
// '/' = homepage 
// http://127.0.0.1:4444/ = homepage
app.get('/',(req,res)=>{
    res.send("hello")
})

// http://127.0.0.1:4444/greet
app.get('/greet', (req,res)=>{
    let person = 'guest'

    /* http://127.0.0.1:4444/greet?person=pankaj
     /?person=pankaj  => req.query*/
    if(req.query.person)
        person = req.query.person
    
    res.send("Good morning " + person);
})
app.listen(4444,()=>{
    console.log("server started on port 4444");
})