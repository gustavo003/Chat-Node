const express = require('express')

const app = express();

const http = require('http').createServer(app);

var server = app.listen(process.env.PORT, ()=>{
    console.log("Iniciado")
})
var io = require('socket.io').listen(server);

io.on("connection", (Socket) => {
    Socket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })

    Socket.on('user_on', (data)=>{
        userSocket.broadcast.emit("users", data)
    })
})


app.get('/', (req, res) => {
   res.send("Node está rodando, veja so que beleza");

})
