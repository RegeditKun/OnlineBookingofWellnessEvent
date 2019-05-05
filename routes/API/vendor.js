const express = require('express')
const router = express.Router()
const vendorControllers = require('../../controllers/vendor')
const auth = require('../../middleware/auth')

router.get('/test', auth.authVendor, vendorControllers.test)

router.post('/registration', vendorControllers.registration)

router.route('/event')
  .post(auth.authVendor, vendorControllers.createEvent)
  .get(auth.authVendor, vendorControllers.showEvent)
  
router.route('/event/:id')
  .put(auth.authVendor, vendorControllers.updateEvent)
  .delete(auth.authVendor, vendorControllers.deleteEvent)

router.get('/booking', auth.authVendor, vendorControllers.showBooking)
router.put('/booking/:id', auth.authVendor, vendorControllers.accRejectBooking) 

module.exports = router