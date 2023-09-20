const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
  sname:String,
  dname:String,
  pname:String,
  pdop:String,
  pava:String,
  ptotal:String,
  poriginalcost:String,
  psellingcost:String,
  uploadimage:String

})

module.exports = mongoose.model("Seller_additem",userSchema)