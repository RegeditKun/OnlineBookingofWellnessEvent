const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookingSchema = new Schema({
	company: { type: Schema.Types.ObjectId, ref: 'Company' }, //idCompany
	vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' }, //idVendor
	address: {
		postalCode: { type: String, default: '' },
		streetName: { type: String, default: '' }
	},
	date: [Date],
	confirmedDate: {
		type: Date,
		default: null
	},
	status: {
		type: String,
		enum: ['Pending', 'Approved', 'Rejected']
	},
	remarks: { type: String }
	},
	{
		timestamps: true
	})

module.exports = mongoose.model('Booking', bookingSchema)
