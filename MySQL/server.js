const express = require('express');
const mysql = require('mysql2');
const app = express();
const connection = mysql.createConnection({
    host:'localhost',
    user:'myuser',
    password:'mypass',
    database:'mytestdb'
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine" ,"hbs");

app.get("/",(req , res)=>{
    getPerson()
    .then((person)=>{
res.render('person',{person});
    })
    .catch((err)=>{
res.send(err)
    })
    
})

app.get('/add',(req,res)=>{
    res.render('add_person')
})
app.post('/add',(req,res)=>{
   addPerson(req.body.name,req.body.age,req.body.city)
   .then(()=>{
       res.redirect('/')
   })
   .catch((error)=>{
       res.send(error)
   })
})

function addPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO person(name,age,city)
            VALUES(?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }

            }
        )
    })
}
function getPerson(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * from person`,
            
            function(err,rows,cols){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }

            }
        )
    })
}

app.listen(4444,()=>{
    console.log("Server started on port 4444");
})