const express = require('express')
const router = express.Router()

const company = require('./API/company')
const vendor = require('./API/vendor')

router.use('/company', company)
router.use('/vendor', vendor)

module.exports = router
