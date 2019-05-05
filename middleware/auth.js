const jwt = require('jsonwebtoken')

exports.authCompany = (req, res, next) => {
	let token = req.headers['auth']
  jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
    if (err) {
      return res.status(400).json({ status: false, message: err.message })
    } else {
      req.company = decoded
      next()
    }
  })
}

exports.authVendor = (req, res, next) => {
	let token = req.headers['auth']
  jwt.verify(token, process.env.SECRETKEY,(err, decoded) => {
    if (err) {
      return res.status(400).json({ status: false, message: err.message })
    } else {
      req.vendor = decoded
      next()
    }
  })
}
