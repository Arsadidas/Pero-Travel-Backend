const { Router } = require("express");

const router = Router();

router.use(require("./users.route"));
router.use(require("./optinals.route"));
router.use(require("./tours.route"));
router.use(require("./reviews.route"));

module.exports = router;
