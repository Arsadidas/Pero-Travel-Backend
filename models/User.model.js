const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
//   today: new Data(),
//   born: Number,доделать
});

const User = mongoose.model("User", userSchema);

module.exports = User;
