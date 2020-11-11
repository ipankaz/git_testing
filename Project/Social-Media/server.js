const express = require('express');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {db} = require('./db/models');
const{usersroute} = require('./routes/users/index')
const{postsroute} = require('./routes/posts/index')

app.use('/api/users',usersroute)
app.use('/api/posts',postsroute)
app.use('/',express.static(__dirname+'/public'))

db.sync()
.then(()=>[
   app.listen('5001',()=>{
       console.log("server started on http://127.0.0.1:5001");
   }) 
]).catch((err)=>{
    console.error(new Error("Database not started"));
    console.error(err);
})