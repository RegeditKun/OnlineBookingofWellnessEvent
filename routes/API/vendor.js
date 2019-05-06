const express = require('express')
const router = express.Router()
const vendorControllers = require('../../controllers/vendor')
const auth = require('../../middleware/auth')

router.post('/registration', vendorControllers.registration)

router.route('/event')
  .post(auth.isAuth, auth.isVendor, vendorControllers.createEvent)
  .get(auth.isAuth, auth.isVendor, vendorControllers.showEvent)

router.route('/event/:id')
  .put(auth.isAuth, auth.isVendor, vendorControllers.updateEvent)
  .delete(auth.isAuth, auth.isVendor, vendorControllers.deleteEvent)

router.get('/booking', auth.isAuth, auth.isVendor, vendorControllers.showBooking)
router.put('/booking/:id', auth.isAuth, auth.isVendor, vendorControllers.accRejectBooking)

module.exports = router
