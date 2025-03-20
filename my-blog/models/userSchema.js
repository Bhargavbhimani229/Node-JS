const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String,
  confirmPassword:String,
})

const userModel = mongoose.model("userTbl",userSchema);

module.exports = userModel;