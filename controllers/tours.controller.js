const Tour = require("../models/Tour.model");

module.exports.toursController = {
  addTour: async (req, res) => {
    const { typeTour, place, title, desc, priceForChild, duration } = req.body;
    try {
      const tour = await Tour.create({
        typeTour,
        place,
        title,
        desc,
        priceForChild,
        duration,
      });
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  deleteTour: async (req, res) => {
    try {
      const tour = await Tour.findByIdAndDelete(req.params.id);
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  changeTour: async (req, res) => {
    try {
      
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  }
};