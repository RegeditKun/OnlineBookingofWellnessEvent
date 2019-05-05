const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

router.get('/test', auth.authCompany, companyControllers.test)

router.post('/registration', companyControllers.registration)

router.get('/event', auth.authCompany, companyControllers.showEvent)

router.post('/booking/:id',auth.authCompany, companyControllers.createBooking)

router.get('/booking', auth.authCompany, companyControllers.showBooking)


module.exports = router