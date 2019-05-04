const mongoose = require('mongoose')
const Schema = mongoose.Schema

let vendorSchema = new Schema({
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
	event:[{ type: Schema.Types.ObjectId, ref: 'Event' }], //idEvent
	},
	{
		timestamps: true
	})

module.exports = mongoose.model('Vendor', vendorSchema)