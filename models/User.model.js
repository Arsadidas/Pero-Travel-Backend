const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
  age:Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
