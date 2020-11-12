const express = require('express');
const app = express();
const http = require('http')
const socketio = require('socket.io')

const server_port = process.env.PORT || 4000

app.use('/',express.static(__dirname+'/public'))

const server = http.createServer(app)
const io = socketio(server);
io.on('connection',(socket)=>{

    // for a particular user socket.id is created to distinguist between them 
    // a socket connection is between only to the server and  particular client 
    // while broadcast connection is between to all the clients and the server

    let users ={
        pankaj:'Avenger@123'
    }

    socketMap ={}

    function login(s,u){
        // socket.join will help in remembering all the username so that real chat room can exist S
        s.join(u)
        s.emit('logged_in',{id:u})
        socketMap[s.id]=u
        console.log(socketMap);
    }

    console.log("connection started on socket id = " + socket.id);
    socket.on('login',(data)=>{

        if(users[data.name]){
            if(users[data.name]==data.password){
                login(socket,data.name)
            }else{
                socket.emit('login_failed')
            }
        }else{
            users[data.name]=data.password
            login(socket,data.name)
            
        }
        console.log("login as : " + data.name);
        
        
    })


    socket.on('userdata',(userdata)=>{
        console.log("to user : " + userdata.to);
        console.log("Message : " + userdata.msg);
        userdata.from = socketMap[socket.id]
        if(userdata.to){
            //it will send message i.e userdata only to particular user 
            io.to(userdata.to).emit('message',(userdata))
        }else{
            //it will send message i.e userdata to all the users except yourself
            socket.broadcast.emit('message',(userdata))
        }
    })

    
    
})
server.listen(server_port,()=>{
    console.log("started on http://localhost:4000");
})