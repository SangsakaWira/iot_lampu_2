// inisiasi library
const express = require("express")
const socketIO = require("socket.io")
const http = require("http")

// konfigurasi
const app = express()
const server = http.createServer(app)
let port = process.env.PORT || 3000

// inisiasi channel io
const io = socketIO(server)

io.on("connection",function(socket){
    // dia ngecek kira2 ada ga yang konek ke server
    console.log("a user is connected")

    io.emit("pesta",{
        suhu:50
    })

})

server.listen(port,function(){
    console.log("Server is running")
})