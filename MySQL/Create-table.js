const mysql = require('mysql2');

const connection = mysql.createConnection({
host:'localhost',
user:'myuser',
password : 'mypass',
database:'mytestdb'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS person(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30) NOT NULL
    )
    `
    ,function(err,results){
        if(err){
            console.log(err);
        }else{
            console.log("Table Created Succesfully");
        }
        connection.close();

    }
)