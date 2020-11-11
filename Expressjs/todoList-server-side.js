const { urlencoded } = require('express');
let express = require('express');
const app = express();
let tasks = ['sample task']
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    let tasklist = tasks.map(t=>`<li>${t}</li>`).join('\n')
res.send(`
<html>
<body>
<form action="/" method="POST">
<input name="newTask">
<button type="submit">ADD</button>
</form>
<ul>
${tasklist}
</ul>
</body>
</html>
`
)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask);
    res.redirect('/');
})

app.listen(4447,()=>{
    console.log('running on port 4447');
})