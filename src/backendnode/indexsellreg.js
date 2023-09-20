const express =require('express')
const cors =require('cors')
require('./config')
const User = require('./usrsellreg')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/",async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})
app.get('/list',async(req,res)=>{
    try{
     const allSeller = await User.find({})
     res.send({status:"ok",data:allSeller})
    }catch(error){
     console.log(error)
    }
 })

app.listen(24111,()=>{
    console.log("connection done")
})