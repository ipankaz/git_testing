const {Router} = require('express');
const{getUserById , getUserByName,createAnonUser} = require('../../controllers/users')
const route = Router();
route.get('/:id',async (req,res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
// when id is username 
user = await getUserByName(req.params.id)
    }else{
        // when id is ID 
        user= await getUserById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({error:"No such user found"})
    }
})

route.post('/',async (req,res)=>{
    const AnonUser = await createAnonUser();
    res.status(201).send(AnonUser)
})
module.exports = {
    usersroute:route
}