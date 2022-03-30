const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/reviews/:tourId", reviewsController.getReviewsByTour);
router.post("/reviews", authMiddleware, reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReview);

module.exports = router;
