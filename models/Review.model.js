const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour"
  },
  userName: String,
  userAge: Number,
  text: String
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
