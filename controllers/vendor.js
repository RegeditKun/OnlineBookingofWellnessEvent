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

exports.createEvent = (req, res) => {
	event.create({
		name: req.body.name,
		idVendor: req.vendor.id
	})
		.then(newEvent => {
			if (newEvent) {
				event.find({ idVendor: req.vendor.id })
					.populate('idVendor', 'name')
					.select('name')
					.exec()
					.then(allEvent => {
						return res.status(201).json({
							success: true,
							message: 'Event successfully created',
							data: allEvent
						})
					})
			} else {
				return res.status(400).json({
					success: false,
					message: 'Event fail to be created'
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
	event.find({ idVendor: req.vendor.id })
		.populate('idVendor', 'name')
		.select('name')
		.exec()
		.then(eventList => {
			if (eventList.length === 0) {
				res.status(404).json({
					success: false,
					message: `You don't have any event`
				})
			} else {
				res.status(200).json({
					success: true,
					message: 'Show your event',
					data: eventList
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

exports.updateEvent = (req, res) => {
	const update = {}
	req.body.name ? update.name = req.body.name : null

	event.findByIdAndUpdate(req.params.id, update,
		{ runValidators: true, context: 'query', new: true })
		.populate('vendor', 'name')
		.select('name vendor')
		.exec()
		.then(updateEvent => {
			if (updateEvent) {
				return res.status(200).json({
					success: true,
					message: 'Event Has Been Updated',
					data: updateEvent
				})
			} else {
				res.status(404).json({
					success: false,
					message: 'Event not found'
				})
			}
		})
		.catch(err => {
			if (err) {
				return res.status(500).json({
					success: false,
					message: err.message
				})
			}
		})
}

exports.deleteEvent = (req, res) => {
	event.findByIdAndRemove(req.params.id)
		.exec()
		.then(deleted => {
			if (deleted) {
				event.find({ idVendor: req.vendor.id })
					.populate('idVendor', 'name')
					.select('name')
					.exec()
					.then(allEvent => {
						return res.status(200).json({
							success: true,
							message: 'Event has been deleted',
							data: allEvent
						})
					})
			} else {
				return res.status(404).json({
					success: false,
					message: 'Event not found'
				})
			}
		})
		.catch(err => {
			return res.status(500).json({
				success: false,
				message: err.message
			})
		})
}

exports.showBooking = (req, res) => {
	booking.find()
		.populate({
			path: 'idEvent', select:'name', match: { idVendor: req.vendor.id },
			populate: { path: 'idVendor', select: 'name' }
		})
		.select('-createdAt -updatedAt -__v')
		.exec()
		.then(showList => {
			if (showList.length === 0) {
				return res.status(404).json({
					success: false,
					message: `You don't have  booking list`,
				})
			} else {
				showList = showList.filter(filterdList => {
					return filterdList.idEvent
				})
				return res.status(200).json({
					success: true,
					message: 'Show Booking List',
					data: showList
				})
			}
		})
		.catch(err => {
			return res.status(500).json({
				success: false,
				message: err.message
			})
		})
}

exports.accRejectBooking = (req, res) => {
	booking.findById(req.params.id)
		.then(Booked => {
			if (!Booked) {
				return res.status(404).json({
					success: false,
					message: `Booked id not found`,
				})
			} else {
				if (req.body.status === 'Rejected') {
					booking.findByIdAndUpdate(Booked.id,
						{ status: 'Rejected', remarks: req.body.remarks },
						{ new: true })
						.then(updateBooking => {
							return res.status(200).json({
								success: true,
								message: 'The booked event has been rejected',
								data: updateBooking
							})
						})
				} else if (req.body.status === 'Approved') {
					booking.findByIdAndUpdate(Booked.id,
						{ status: 'Approved', confirmedDate: req.body.confirmedDate },
						{ new: true })
						.then(updateBooking => {
							return res.status(200).json({
								success: true,
								message: 'The booked event has been accepted',
								data: updateBooking
							})
						})
				} else {
					return res.status(404).json({
						success: false,
						message: 'Booked id not founds`',
					})
				}
			}
		})
		.catch(err => {
			return res.status(500).json({
				success: false,
				message: err.message
			})
		})
}