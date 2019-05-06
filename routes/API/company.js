const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

router.post('/registration', companyControllers.registration)

router.get('/event', auth.isAuth, auth.isCompany, companyControllers.showEvent)

router.route('/booking')
  .post(auth.isAuth, auth.isCompany, companyControllers.createBooking)
  .get(auth.isAuth, auth.isCompany, companyControllers.showBooking)

module.exports = router
