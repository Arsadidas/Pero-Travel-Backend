const { Router } = require("express");
const { optionalsController } = require("../controllers/optionals.controller");

const router = Router();

router.post("/optionals", optionalsController.addOptinal);
router.delete("/optionals/:optionalsId", optionalsController.deleteOptinal);
router.patch("/optionals/:optionalsId", optionalsController.changeOptinal);

module.exports = router;
