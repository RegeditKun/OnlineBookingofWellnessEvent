const express = require('express')
const router = express.Router()
const vendorControllers = require('../../controllers/vendor')
const auth = require('../../middleware/auth')

router.get('/test', vendorControllers.test)

router.post('/login', vendorControllers.login)

router.get('/event', auth.authCompany, vendorControllers.showEvent)

router.put('/accept', auth.authCompany, vendorControllers.acceptEvent)

router.put('/reject', auth.authCompany, vendorControllers.rejectEvent)

module.exports = router