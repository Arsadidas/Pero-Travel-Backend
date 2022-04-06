const Review = require("../models/Review.model");
const User = require("../models/User.model");

module.exports.reviewsController = {
  getReviewsByTour: async (req, res) => {
    try {
      const reviews = await Review.find({ tour: req.body.tourId });
      res.json(reviews);
    } catch (e) {
      res.status(401).json("Ошибка " + e.toString());
    }
  },
  addReview: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });

      const reviews = await Review.create({
        user: req.user.id,
        tour: req.body.id,
        firstName: user.firstName,
        lastName: user.lastName,
        text: req.body.text
      });
      res.json(reviews);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      res.json(review);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },
};
