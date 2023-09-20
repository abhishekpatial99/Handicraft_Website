const express = require('express')
const cors =require('cors')
require('./config')
const User =require('./userreg')
const app =express()
app.use(express.json())
app.use(cors())

app.get('/list',async(req,res)=>{
   try{
    const allUser = await User.find({})
    res.send({status:"ok",data:allUser})
   }catch(error){
    console.log(error)
   }
}).listen(25000)
