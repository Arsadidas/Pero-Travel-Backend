const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  login: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
