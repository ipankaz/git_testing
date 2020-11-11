const route = require('express').Router()
const Product = require('./shopping-cart-db').Product


route.get('/',(req,res)=>{
Product.findAll()
.then((products)=>{
    res.status(200).send(products)
}).catch((err)=>{
    res.status(500).send({error:"could not retrive products"})
})

})

route.post('/',(req,res)=>{

    if(isNaN(parseFloat(req.body.price))){
        return rew.status(403).send({error:"Price is not valid"})
    }
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
       price:parseFloat(req.body.price)

    }).then((products)=>{
        res.status(500).send(products)
    }).catch((err)=>{
        res.status(500).send({error:"product not added"})
    })
})
exports = module.exports =route 