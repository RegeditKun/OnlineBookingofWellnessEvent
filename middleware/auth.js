/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken')

exports.authCompany = (req, res, next) => {
  const token = req.headers.auth
  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ status: false, message: err.message })
    }
    req.company = decoded
    if (req.company.role === 'company') {
      next()
    }
  })
}

exports.authVendor = (req, res, next) => {
  const token = req.headers.auth
  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ status: false, message: err.message })
    }
    req.vendor = decoded
    if (req.vendor.role === 'vendor') {
      next()
    }
  })
}
