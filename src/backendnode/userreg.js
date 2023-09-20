const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
  firstName : String,
  lastName:String,
  email:String,
  contact:String,
  password:String,
  confirmpassword:String,
  address:String,
  zip:String
})

module.exports = mongoose.model("User_register",userSchema)