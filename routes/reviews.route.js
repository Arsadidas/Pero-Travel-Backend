const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get("/reviews", reviewsController.getReviewsByTour);
router.post("/reviews", reviewsController.addReiews);
router.delete("/reviews/:id", reviewsController.deleteReviews);

module.exports = router;
