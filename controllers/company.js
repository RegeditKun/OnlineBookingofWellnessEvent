const company = require('../models/company')
const event = require('../models/event')
const booking = require('../models/booking')
const vendor = require('../models/vendor')
const bcrypt = require('bcrypt')

exports.test = (req, res) => {
  res.json('WELCOME TO COMPANY API!')
}

exports.registration = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_SALT))
  let Company = company({
    email: req.body.email,
    password: hash,
    name: req.body.name,
    address: {
      postalCode: req.body.postalCode,
      streetName: req.body.streetName
    }
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
  event.findById(req.params.id)
    .then(eventBooking => {
      if (!eventBooking) {
        res.status(404).json({
          success: false,
          message: `Event not found`
        })
      } else {
        booking.create({
          idCompany: req.company.id,
          idEvent: eventBooking._id,
          location: req.company.address,
          date: req.body.date
        })
          .then(newBooking => {
            if (newBooking) {
              booking.find({ idCompany: req.company.id })
                .populate({
                  path: 'idEvent', select: 'name', populate: { path: 'idVendor', select: 'name' }
                })
                .select('-createdAt -updatedAt -__v')
                .exec()
                .then(allBooking => {
                  return res.status(201).json({
                    success: true,
                    message: 'Event successfully created',
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
  booking.find({ idCompany: req.company.id })
    .select('-createdAt -updatedAt -__v -_id')
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

exports.showVendor = (req, res) => {
  vendor.find({})
    .select('-password -createdAt -updatedAt -__v -_id')
    .exec()
    .then(showAllVendor => {
      if (showAllVendor.length === 0) {
        return res.status(404).json({
          success: false,
          message: `Vendor not found`
        })
      } else {
        return res.status(200).json({
          success: false,
          message: `Show all vendor`,
          data: showAllVendor
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
