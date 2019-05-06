const vendor = require('../models/vendor')
const company = require('../models/company')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.login = (req, res) => {
  vendor.findOne({ email: req.body.email })
    .exec()
    .then(vendorDetail => {
      if (!vendorDetail) {
        company.findOne({ email: req.body.email })
          .exec()
          .then(companyDetail => {
            if (!companyDetail) {
              return res.status(400).json({
                success: false,
                message: 'Email incorrect!'
              })
            } else {
              bcrypt.compare(req.body.password, companyDetail.password)
                .then(valid => {
                  if (valid) {
                    let dataToken = { id: companyDetail._id, name: companyDetail.name, address: companyDetail.address, role: 'company' }
                    let token = jwt.sign(dataToken, process.env.SECRETKEY, { expiresIn: '7d', algorithm: 'HS256' })
                    return res.status(200).json({
                      success: true,
                      message: 'Company found!',
                      token: token
                    })
                  } else {
                    return res.status(400).json({
                      success: false,
                      message: 'Password incorrect!'
                    })
                  }
                })
                .catch(err => {
                  res.status(500).json({
                    success: false,
                    message: err.message
                  })
                })
            }
          })
      } else {
        bcrypt.compare(req.body.password, vendorDetail.password)
          .then(valid => {
            if (valid) {
              let dataToken = { id: vendorDetail._id, name: vendorDetail.name, role: 'vendor' }
              let token = jwt.sign(dataToken, process.env.SECRETKEY, { expiresIn: '7d', algorithm: 'HS256' })
              return res.status(200).json({
                success: true,
                message: 'Vendor found!',
                token: token
              })
            } else {
              return res.status(400).json({
                success: false,
                message: 'Password incorrect!'
              })
            }
          })
          .catch(err => {
            res.status(500).json({
              success: false,
              message: err.message
            })
          })
      }
    })
}
