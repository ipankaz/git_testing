const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
 
 async function writetasks(){
     const client =await MongoClient.connect(url)
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const sample = db.collection('sample')
        const result = await sample.insertMany([
            { name:'pankaj',age:'21',location:'faridabad'},
            { name:'ankush',age:'22',location:'dehradun'},
            { name:'shilpa',age:'26',location:'noida'},
            { name:'suman',age:'51',location:'panipat'},
            ])
        console.log(result);
}
writetasks()