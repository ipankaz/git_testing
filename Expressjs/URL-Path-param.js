let express = require('express');
const app = express();

// '/:city' = :city is a variable 
// to get variable city we use req.param.city 
app.get('/:city/welcome' , (req,res)=>{
    res.send("WELCOME to " + req.params.city);
})

app.listen(4446,()=>{
    console.log("running on port 4446");

})