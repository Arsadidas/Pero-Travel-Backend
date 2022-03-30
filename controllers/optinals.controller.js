const Optional = require("../models/Optional.model");

module.exports.optinalsControllers = {
  addOptinal: async (req, res) => {
    try {
      const { tour, title, price } = req.body;
      const optinal = await Optional.create({
        tour,
        title,
        price,
      });
      res.json(optinal);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  deleteOptinal: async (req, res) => {
    try {
      const optinal = await Optional.findByIdAndRemove(req.params.optinalsId);
      res.json(optinal);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  changeOptinal: async (req, res) => {
    try {
      const { title, price } = req.body;
      const optinal = await Optional.findByIdAndUpdate(req.params.optinalsId, {
        title,
        price,
      });
      res.json(optinal);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
};
