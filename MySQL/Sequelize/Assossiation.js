const sequelize = require('sequelize');
const db = new sequelize('sampledb1','sampleuser1','samplepass1',{
host:'localhost',
dialect:'mysql'
})
const DataTypes = sequelize.DataTypes;
const Course = db.define('course',{
    id:{
        type: DataTypes.INTEGER(2),
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(30),
        allowsNull:false
    }
})
const Teacher = db.define('teacher',{
    name:{
        type: DataTypes.STRING(30),
        allowsNull:false
    }
})
const Season = db.define('season',{
    id:{
        type: DataTypes.INTEGER(2),
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(30),
        allowsNull:false
    }
})
const Batch= db.define('batch',{
    code:{
        type: DataTypes.INTEGER(8),
        primaryKey:true
    },
    startDate:{
        type: DataTypes.DATE,
        allowsNull:false
    },
    endDate:{
        type: DataTypes.DATE,
        allowsNull:false
    },
    year:DataTypes.INTEGER(4)
})

const Center= db.define('center',{
    id:{
        type: DataTypes.INTEGER(2),
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(15),
        allowsNull:false
    },
    city:{
        type: DataTypes.STRING(15),
        allowsNull:false
    }
})

//Assosiations

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Center.hasMany(Batch)
Season.hasMany(Batch)

db.sync()
.then(()=>{
    console.log("DB Synced");
})
.catch((err)=>{
    console.error(err);
})

module.exports ={
    db,Course,Center,Teacher,Batch,Season
}