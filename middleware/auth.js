const jwt = require('jsonwebtoken')

exports.authCompany = (req, res, next) => {
	let token = req.headers['Authorization']
  jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
    if (err) {
      return res.status(400).json({ status: 'error', message: err.message })
    } else {
      req.userCompany = decoded
      next()
    }
  })
}

exports.authVendor = (req, res, next) => {
	let token = req.headers['Authorization']
  jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
    if (err) {
      return res.status(400).json({ status: 'error', message: err.message })
    } else {
      req.userVendor = decoded
      next()
    }
  })
}
