const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  typeTour: String,
  place: String,
  title: String,
  desc: String,
  price: Number,
  priceForChild: Number,
  days: [],
  duration: Number,
  wayPoints: [],
  gallery: [],
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
