let express = require('express');
const app = express();

// to decode body data 
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("Hello form")
})


// In get , when http://127.0.0.1:4445/greet is clicked , the data goes to res.query 
app.get('/greet', (req,res)=>{
    let person = 'guest'

    /* http://127.0.0.1:4445/greet?person=pankaj
     /?person=pankaj  => req.query*/
    if(req.query.person)
        person = req.query.person
    
    res.send("Good morning " + person);
})

// In post , data doesnot go in query instead it goes in req.body 
// we can not easilly access body data , because its encoded , we frist have to decode it by using
//  app.use(express.urlencoded({extended:true}))
app.post('/greet', (req,res)=>{
    let person = 'guest2'

    
    if(req.body.person)
        person = req.body.person
    
    res.send("Good Evening " + person);
})


app.get('/form',(req,res)=>{

    // __dirname = directory name 
    // it will send the file specified here 
    res.sendFile(__dirname+'/forms_and_input_tags.html')
})

app.listen(4445,()=>{
    console.log("server started on http://127.0.0.1:4445");
})