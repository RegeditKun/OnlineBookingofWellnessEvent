const express = require('express')
const router = express.Router()

const API = require('./API/index')

router.use('/api', API)

module.exports = router
