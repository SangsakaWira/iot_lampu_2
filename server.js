// npm init
// npm install express --s

const express = require("express")
const app = express()

let port = process.env.PORT || 3000
let data_lampu = {}

app.listen(port,function(){
    console.log("Server is running")
})

app.get("/",function(req,res){
    res.send(data_lampu)
})

app.get("/lampu1/:lampu1",function(req,res){
    data_lampu = {
        lampu1:req.params.lampu1
    }
    res.redirect("/")
})

// https://notepad.pw/iot7maret