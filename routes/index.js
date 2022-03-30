const { Router } = require("express")

const router = Router()

router.use(require('./routes/users.route'))
router.use(require('./routes/optinals.route'))
router.use(require('./routes/tours.route'))
router.use(require('./routes/reviews.route'))


module.exports = router