const { Router } = require('express')
const { bookingsController } = require('../controllers/bookings.controller')

const router = Router()

router.get('/bookings', bookingsController.getBooking)
router.post('/bookings', bookingsController.addBooking)
router.patch('/bookings/:toursId', bookingsController.removeDayFromBooking)

module.exports = router