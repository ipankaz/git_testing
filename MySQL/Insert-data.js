const mysql = require('mysql2');
const insert = {
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}


const connection = mysql.createConnection({
    host:'localhost',
    user:'myuser',
    password:'mypass',
    database:'mytestdb'
})

connection.query(
    `INSERT INTO person(name,age,city) VALUES (
         '${insert.name}',
         ${insert.age},
         '${insert.city}'   
   ) `,
    function(err,results){
        if(err){
            console.log(err);

        }else{
            console.error(results);
            console.log("Inserted data successfuly");
        }
        connection.close();
    }
)
//     Terminal command to insert data
// node .\MySQL\Insert-data.js pankaj 22 panipat