const express = require('express')

const app = express();

const http = require('http').createServer(app);

var server = app.listen(process.env.PORT||8080, ()=>{
    console.log("Iniciado")
})
var io = require('socket.io').listen(server);

io.on("connection", (Socket) => {
    Socket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

app.get('/', (req, res) => {
   res.send("Node está rodando, veja so que beleza");

})
