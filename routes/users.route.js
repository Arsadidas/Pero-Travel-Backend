const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const addFilleMiddleware = require("../middlewares/addFille.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", usersController.getAllUsers);
router.get("/users/profile", authMiddleware, usersController.getIdUser);
router.post(
  "/registration",
  addFilleMiddleware.single("image"),
  usersController.registrationUser
);
router.post("/login", usersController.login);
router.patch(
  "/users/image",
  authMiddleware,
  addFilleMiddleware.single("image"),
  usersController.changeUserPicture
);

module.exports = router;
