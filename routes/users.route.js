const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const addFilleMiddleware = require("../middlewares/addFille.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", usersController.getAllUsers);
router.post("/registration", authMiddleware, usersController.registrationUser);
router.post("/login", usersController.login);
router.patch(
  "/users/image",
  addFilleMiddleware.single("image"),
  usersController.changeUserPicture
);

module.exports = router;
