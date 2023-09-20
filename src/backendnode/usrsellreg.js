const mongoose= require ('mongoose')


const userSchema = new mongoose.Schema({
    fname : String,
    lname:String,
    email:String,
    contact:String,
    password:String,
    confirmpassword:String,
    address:String,
    zip:String
  
})

module.exports = mongoose.model("Seller_register",userSchema)