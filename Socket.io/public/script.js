let socket = io();

let SendBtn = $('#SendBtn')
let InpMsg = $('#InpMsg')
let ulList = $('#ulList')
let loginBox = $('#loginBox')
let chatBox = $('#chatBox')
let loginBtn = $('#loginBtn')
let username  = $('#username')
let password  = $('#password')
let InpToUser  = $('#InpToUser')
let userid = $('#userid')

chatBox.hide()
loginBox.show()

loginBtn.click(()=>{
    socket.emit('login',{
       
       name:username.val() ,
       password:password.val()
    })
  
})
socket.on('logged_in',(u)=>{
    window.alert('Login successfull')
    chatBox.show()
    loginBox.hide()
    userid.text(`username : ${u.id}` )
    
})

socket.on('login_failed',()=>{
    window.alert('Either Username or Password is incorrect')
})

SendBtn.click(()=>{
    socket.emit('userdata',{
        to:InpToUser.val(),
        msg:InpMsg.val()
    })
    InpToUser.val('')
        InpMsg.val('')
})

socket.on('message',(data)=>{
    ulList.append($('<li>').text(`${data.from} : ${data.msg}`))
})

