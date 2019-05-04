const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	vendor:{ type: Schema.Types.ObjectId, ref: 'Vendor' }, //idVendor
	},
	{
		timestamps: true
	})

module.exports = mongoose.model('Event', eventSchema)