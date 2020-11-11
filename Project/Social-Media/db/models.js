const Sequelize = require('sequelize');
const db = new Sequelize({
    dialect:'mysql',
    database:'socialmediadb',
    username:'socialuser',
    password:'socialpass'
})

// definining columns

const COL_ID_DEF = {
    type:Sequelize.DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
}
const COL_USERNAME_DEF = {
    type:Sequelize.DataTypes.STRING(30),
    unique:true,
    allowNull:false
    
}
const COL_TITLE_DEF = {
    type:Sequelize.DataTypes.STRING(150),
    allowNull:false
}

const Users = db.define('user',{
    id:COL_ID_DEF,
    username:COL_USERNAME_DEF,
    
})
const Posts = db.define('post',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type:Sequelize.DataTypes.TEXT,
        allowNull:false

    }
})
const Comments = db.define('comment',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type:Sequelize.DataTypes.TEXT('tiny'),
       

    }
})

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Users.hasMany(Posts)
Posts.belongsTo(Users)

 module.exports={
db,Users,Comments,Posts
}