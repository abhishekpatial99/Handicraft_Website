  const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  firstname :String,
  lastname:String,
  username:String,
  email:String,
  address:String,
  address2:String,
  country:String,
  state:String,
  pin:String
  
})

module.exports = mongoose.model("Checkout",userSchema)