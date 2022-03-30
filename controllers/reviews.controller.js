const Review = require("../models/Review.model");

module.exports.reviewsController = {
  getReviewsByTour: async (req, res) => {
    try {
      const review = Review.find({ tour: req.body.tourID });
      res.json(review);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },
  addReiews: async (req, res) => {
    try {
      const { user, tour, userName, userAge, text } = req.body;

      const reviews = await Review.create({
        user,
        tour,
        userName,
        userAge,
        text,
      });
      res.json(reviews);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },
  deleteReviews: async (req, res) => {
    try {
      const reviews = await Review.findByIdAndDelete(req.params.id);
      res.json(reviews);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },
};
