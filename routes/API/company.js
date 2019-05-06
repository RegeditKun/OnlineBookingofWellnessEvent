const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

router.post('/registration', companyControllers.registration)

router.get('/event', auth.authCompany, companyControllers.showEvent)

router.route('/booking')
  .post(auth.authCompany, companyControllers.createBooking)
  .get(auth.authCompany, companyControllers.showBooking)

module.exports = router
