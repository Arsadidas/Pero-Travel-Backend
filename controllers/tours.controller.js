const Tour = require("../models/Tour.model");

module.exports.toursController = {
  fetchTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.json(tours);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  addTour: async (req, res) => {
    try {
      const {
        typeTour,
        place,
        title,
        desc,
        price,
        priceForChild,
        duration,
        tickets,
      } = req.body;
      const tour = await Tour.create({
        typeTour,
        bgImage: req.file.path,
        vcImage: req.file.path,
        place,
        title,
        desc,
        price,
        priceForChild,
        duration,
        tickets,
      });
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  deleteTour: async (req, res) => {
    try {
      const tour = await Tour.findByIdAndDelete(req.params.toursId);
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  changeTour: async (req, res) => {
    try {
      const { typeTour, place, title, desc, price, priceForChild, duration } =
        req.body;
      await Tour.findByIdAndUpdate(req.params.toursId, {
        ...req.body,
        bgImage: req.file.path,
      });
      const tour = await Tour.findById(req.params.toursId);
      res.json(tour);
    } catch (e) {
      res.status(401).json("Ошибка " + e.toString());
    }
  },

  changeTourGallery: async (req, res) => {
    try {
      console.log(req.params.toursId);
      console.log(req.file.path);
      await findByIdAndUpdate(req.params.toursId, {
        $push: {
          gallery: req.file.path,
        },
      });
      const tour = await Tour.findById(req.params.toursId);
      res.json(tour);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
};
