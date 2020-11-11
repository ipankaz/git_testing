const {Router,} = require('express');
const{findAllPost,createNewPost}=require('../../controllers/posts');
const route = Router();



route.get('/',async (req,res)=>{
   
    const post = await findAllPost()
    if(post){
        res.status(200).send(post)
    }else{
        res.status(404).send({error:"No post found"})
    }
})
route.post('/', async (req,res)=>{
    console.log(req.body);
    const userId = req.body.userId
    const title = req.body.title
    const body = req.body.body
    if((!title)||(!userId)||(!body)){
        res.status(400).send({
            error:"Bad Gateway"
        })
    }else{
        const newpost = await createNewPost(userId,title,body)
        res.status(201).send(newpost)
    }
})
module.exports = {
    postsroute:route
}