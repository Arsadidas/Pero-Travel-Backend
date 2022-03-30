const { Router } = require("express");
const { optinalsControllers } = require("../controllers/optinals.controller");

const router = Router();

router.post("/optinals", optinalsControllers.addOptinal);
router.delete("/optinals", optinalsControllers.deleteOptinal);

module.exports = router