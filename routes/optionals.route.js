const { Router } = require("express");
const { optinalsControllers } = require("../controllers/optionals.controller");

const router = Router();

router.post("/optinals", optinalsControllers.addOptinal);
router.delete("/optinals/:optinalsId", optinalsControllers.deleteOptinal);
router.patch("/optinals/:optinalsId", optinalsControllers.changeOptinal);

module.exports = router;
