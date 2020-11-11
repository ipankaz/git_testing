const{app} = require('./server.js');
const{seed} = require('./Seeding-Database.js');

const start = async()=>{
    try{
await seed()
.then(()=>{
    console.log("DB Synced......");
})

app.listen(3131,()=>{
    console.log("Server started on port 3131");
})
    }catch(err){
console.error(err);
    }
}

start();