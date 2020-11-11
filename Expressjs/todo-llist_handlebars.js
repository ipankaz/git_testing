const { urlencoded } = require('express');
let express = require('express');
const app = express();
let tasks = ['sample task']
app.use(express.urlencoded({extended:true}))

// so that it can identitfy its a hbs tempate 
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    // first parameter is name of file to be render and second parameter is editable content in the html file home 
 res.render('home',{tasks})

})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask);
    res.redirect('/');
})

app.listen(4448,()=>{
    console.log('running on port 4448');
})