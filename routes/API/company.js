const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

router.get('/test', companyControllers.test)

router.post('/login', companyControllers.login)

router.route('/event')
	.post(auth.authCompany, companyControllers.createEvent)
	.get(auth.authCompany, companyControllers.showEvent)

module.exports = router