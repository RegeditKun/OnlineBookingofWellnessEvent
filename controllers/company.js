const company = require('../models/company')
const event = require('../models/event')
const booking = require('../models/booking')
const bcrypt = require('bcrypt')

exports.registration = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_SALT))
  let Company = company({
    email: req.body.email,
    password: hash,
    name: req.body.name
  })
  Company.save((err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Registration Success'
      })
    }
  })
}

exports.createBooking = (req, res) => {
  event.findById(req.body.id)
    .then(eventBooking => {
      if (!eventBooking) {
        res.status(404).json({
          success: false,
          message: `Event not found`
        })
      } else {
        booking.create({
          idCompany: req.user.id,
          idEvent: eventBooking._id,
          location: req.body.location,
          date: req.body.date
        })
          .then(newBooking => {
            if (newBooking) {
              booking.find({ idCompany: req.user.id })
                .populate({
                  path: 'idEvent', select: 'name', populate: { path: 'idVendor', select: 'name' }
                })
                .select('-createdAt -updatedAt -__v')
                .exec()
                .then(allBooking => {
                  return res.status(201).json({
                    success: true,
                    message: 'Booking successfully created',
                    data: allBooking
                  })
                })
            } else {
              res.status(400).json({
                success: false,
                message: 'Booking fail to be created'
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
    .catch(err => {
      res.status(500).json({
        success: false,
        message: err.message
      })
    })
}

exports.showBooking = (req, res) => {
  booking.find({ idCompany: req.user.id })
    .populate({
      path: 'idEvent idCompany', select: 'name', populate: { path: 'idVendor', select: 'name' }
    })
    .select('-updatedAt -__v')
    .exec()
    .then(booked => {
      if (booked.length === 0) {
        return res.status(404).json({
          success: false,
          message: `You don't have booked event`
        })
      } else {
        return res.status(200).json({
          success: true,
          message: `Showing booked list`,
          data: booked
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

exports.showEvent = (req, res) => {
  event.find({})
    .populate('idVendor', 'name')
    .exec()
    .then(showAllEvent => {
      let result = []
      let resultMap = new Map()

      for (let obj of showAllEvent) {
        if (!resultMap.has(obj.name)) {
          resultMap
            .set(obj.name, [{ idEvent: obj.id, idVendor: obj.idVendor }])
        } else {
          let vendors = resultMap.get(obj.name)
          vendors.push({ idEvent: obj.id, idVendor: obj.idVendor })
          resultMap
            .set(obj.name, vendors)
        }
      }
      const mapping = (value, key, map) => {
        result.push({
          name: key,
          vendors: value
        })
      }
      resultMap.forEach(mapping)

      if (showAllEvent.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Event not found'
        })
      } else {
        res.status(200).json({
          success: true,
          message: 'Show all event',
          data: result
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
