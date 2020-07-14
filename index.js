const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Este app foi feito pelo 03 :)");
})

const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })

    userSocket.on('user_on', (data)=>{
        userSocket.broadcast.emit("users", data)
    })
    
})

http.listen(process.env.PORT)

