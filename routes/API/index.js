const express = require('express')
const router = express.Router()

const loginController = require('../../controllers/login')
const company = require('./company')
const vendor = require('./vendor')

router.use('/company', company)
router.use('/vendor', vendor)
router.use('/login', loginController.login)

module.exports = router
