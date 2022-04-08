const { Router } = require("express");
const { bookingsController } = require("../controllers/bookings.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/bookings", authMiddleware, bookingsController.getBooking);
router.post("/bookings",  bookingsController.addBooking);
router.delete(
  "/bookings/:bookingsId",
  authMiddleware,
  bookingsController.removeDayFromBooking
);

module.exports = router;
