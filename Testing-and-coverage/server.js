const express = require('express');
const app = express();
const fareutil = require('./public_static/fairutil')
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public_static')))

app.post('/calcfare',(req,res)=>{
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareutil.calcfare(km,min)
    
    res.send({fare:fare})

})

app.get('/rate',(req,res)=>{
    res.send(fareutil.rate)
})

exports = module.exports ={
    app
}