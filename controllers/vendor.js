const company = require('../models/company')
const event = require('../models/event')
const booking = require('../models/booking')
const vendor = require('../models/vendor')
const bcrypt = require('bcrypt')

exports.test = (req, res) => {
	res.json("WELCOME TO VENDOR API!")
}

exports.registration = (req, res) => {
	let hash = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_SALT))
	let Vendor = vendor({
		email: req.body.email,
		password: hash,
		name: req.body.name,
		address: {
			postalCode: req.body.postalCode,
			streetName: req.body.streetName
		}
	})
	Vendor.save((err) => {
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

exports.login = (req, res) => { }

exports.createEvent = (req, res) => { }

exports.showEvent = (req, res) => { }

exports.acceptEvent = (req, res) => { }

exports.rejectEvent = (req, res) => { }