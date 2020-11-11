const User = require('../shopping-cart-db').User
const route = require('express').Router()



// const express = require('express');
// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

route.get('/',(req,res)=>{
    User.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((err)=>{
        res.status(400).send({error:"couldnot retrieve users"})
    })
})

route.post('/',(req,res)=>{
   
    User.create({
        
       name: req.body.name
    },{
        ignoreDuplicates:true
    }).then((users)=>{
        res.status(201).send(users)
    }).catch((err)=>{
        res.status(500).send({error:"not added"})
    })
})

exports = module.exports = route