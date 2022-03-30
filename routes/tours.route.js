const { Router } = require("express");
const { toursController } = require("../controllers/tours.controller");

const router = Router();

router.post("/tours", toursController.addTour);
router.delete("/tours/:toursId", toursController.deleteTour);
router.patch("/tours/:toursId", toursController.changeTour);

module.exports = router;
