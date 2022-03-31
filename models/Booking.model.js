const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
  },
  days: [],
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
