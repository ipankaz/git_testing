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
    ` SELECT * FROM person 
    `,
    function(err,results,fields){
        if(err){
            console.log(err);

        }else{
            console.error(results);
            console.error(fields);
            console.log("Table selected successfuly");
        }
        connection.close();
    }
)
//     Terminal command to insert data
// node .\MySQL\Select-table.js 