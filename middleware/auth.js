const jwt = require('jsonwebtoken')

module.exports = {
  isAuth: (req, res, next) => {
    try {
      const token = req.headers['auth']
      let decoded = jwt.verify(token, process.env.SECRETKEY)
      req.user = decoded
      next()
    } catch (err) {
      res.status(401).json({
        success: false, message: 'Token is Invalid' + ', ' + err.message
      })
    }
  },
  isVendor: (req, res, next) => {
    try {
      if (req.user.role === 'vendor') {
        next()
      } else {
        res.status(403).json({ message: 'Your Username is not Authorized' })
      }
    } catch (err) {
      res.status(401).json({
        success: false, message: 'Token is invalid' + ', ' + err.message
      })
    }
  },
  isCompany: (req, res, next) => {
    try {
      if (req.user.role === 'company') {
        next()
      } else {
        res.status(403).json({ message: 'Your Username is not Authorized' })
      }
    } catch (err) {
      res.status(401).json({
        message: 'Token is invalid' + ', ' + err.message
      })
    }
  }
}
