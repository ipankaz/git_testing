const express = require('express');
const app = express();
const{Course,Season,Center, Batch} = require('./Assossiation')

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/batchcode',async (req,res)=>{
    try{
const centers = await Center.findAll()
const courses = await Course.findAll()
const seasons = await Season.findAll()
const year = [2015,2016,2017,2018,2019,2020,2021]
        res.render('batchcode',{
centers,seasons,courses,year
        })
    }catch(err){
        console.error(err);
    }
})

app.post('/batchcode',async (req,res)=>{
    let batchcode = ''
    batchcode+=req.body.center
    batchcode+=req.body.course
    batchcode+=req.body.season

    try{
const batch = await Batch.create({
    code:batchcode,
    year:req.body.year,
    courseId:req.body.course,
    centerId:req.body.center,
    seasonId:req.body.season,
    startDate:Date.parse(req.body.start),
    endDate:Date.parse(req.body.end),
    
})
    }catch(err){
        console.error(err);
    }
    res.send(batchcode)

})

app.get('/batches', async (req,res)=>{

    // findAll is used to select the table 
    const batches = await Batch.findAll({
        // include is join in sequelize 
        include:[Course,Season,Center]
    })
    try{
        res.render('batches',{batches})
    }catch(err){
        console.error(err);
    }
})


module.exports = {
    app
}