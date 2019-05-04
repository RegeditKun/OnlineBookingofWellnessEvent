const express = require('express')
const router = express.Router()
const vendorControllers = require('../../controllers/vendor')
const auth = require('../../middleware/auth')

router.get('/test', auth.authVendor, vendorControllers.test)

router.post('/registration', vendorControllers.registration)

router.get('/event', auth.authVendor, vendorControllers.showEvent)

router.put('/accept', auth.authVendor, vendorControllers.acceptEvent)

router.put('/reject', auth.authVendor, vendorControllers.rejectEvent)

module.exports = router