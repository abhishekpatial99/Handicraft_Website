const express = require('express')
const cors =require('cors')
require('./config')
const User = require('./usrcheck')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/",async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})

app.listen(24097,()=>{
    console.log("connection done")
})