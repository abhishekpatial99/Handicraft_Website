const express =require('express')
const cors =require('cors')
require('./config')
const User = require('./usrcontact')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/",async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})
app.get('/',async(req,res)=>{
    try{
     const allUser = await User.find({})
     res.send({status:"ok",data:allUser})
    }catch(error){
     console.log(error)
    }
 })

app.listen(24105,()=>{
    console.log("connection done")
})