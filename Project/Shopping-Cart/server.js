const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',express.static(path.join(__dirname,'public')))  //it shows index.html in public folder
app.use('/api',require('./routes/api').route)   //it shows index.js in routes/api/index.js



app.listen('4000',()=>{
    console.log("server started on port 4000");
})
