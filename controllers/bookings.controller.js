const Booking = require("../models/Booking.model");

module.exports.bookingsController = {
  getBooking: async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  addBooking: async (req, res) => {
    try {
      const { tour, days } = req.body;
      const booking = await Booking.create({
        user: req.user.id,
        tour,
        days,
      });
      res.json(booking);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  removeDayFromBooking: async (req, res) => {
    try {
      const booking = await Booking.findOneAndUpdate(
        { tour: req.params.toursId },
        {
          days: [...booking.days.filter((day) => day !== req.body.day)],
        }
      );
      res.json(booking);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
};
