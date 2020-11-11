const Sequelize = require('sequelize');
const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect:'mysql'
})

const User  = db.define('users',{
    id:{
        type:Sequelize.INTEGER(3),
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(30),
        allowsNull:false
    }
})
const Product  = db.define('products',{
    id:{
        type:Sequelize.INTEGER(3),
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(30),
        allowsNull:false
    },
    manufacturer:Sequelize.STRING,
    price:{
        type:Sequelize.FLOAT,
        allowsNull:false,
        defaultValue:0.0
    }
})
db.sync()
.then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.error(err);
})

module.exports={
    User,Product
}