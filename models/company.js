const mongoose = require('mongoose')
const Schema = mongoose.Schema

let companySchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		postalCode: { type: String, default: '' },
		streetName: { type: String, default: '' }
	},
	booked:[{ type: Schema.Types.ObjectId, ref: 'Booked' }], //idBooking
	},
	{
		timestamps: true
	})

module.exports = mongoose.model('Company', companySchema)
