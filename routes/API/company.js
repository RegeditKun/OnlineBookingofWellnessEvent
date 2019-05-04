const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

router.get('/test', auth.authCompany, companyControllers.test)

router.post('/registration', companyControllers.registration)

router.route('/event')
	.post(auth.authCompany, companyControllers.createEvent)
	.get(auth.authCompany, companyControllers.showEvent)

module.exports = router