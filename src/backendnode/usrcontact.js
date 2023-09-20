const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name : String,
  subject:String,
  Email:String,
  how:String
})

module.exports = mongoose.model("Contact",userSchema)