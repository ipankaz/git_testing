const Sequelize = require('sequelize');
const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect:'mysql'
})
const DataTypes = Sequelize.DataTypes;
const User  = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})
const Product  = db.define('products',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowsNull:false,
    },
    manufacturer:DataTypes.STRING,
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0.0
    }
})
db.sync()
.then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.error(err);
})

exports = module.exports={
    User,Product
}