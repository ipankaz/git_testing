const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
 
 async function Readtasks(){
     const client =await MongoClient.connect(url)
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const sample = db.collection('sample')
        const result = await sample.find({
            // there are many operators just like mysql, you can find them on google 
            // await sample.find({}).sort({age:1}).toArray()  ==> sort the result into increasing order
            // await sample.find({}).sort({age:-1}).toArray()  ==> sort the result into decreasing order
            $and:[
                {age:'51'},
                {location:'panipat'}
            ]
        }).toArray()
        result.forEach(element => {
            console.log(JSON.stringify(element));
        });
        client.close()
}
Readtasks()