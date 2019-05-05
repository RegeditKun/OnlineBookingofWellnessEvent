const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
    maxLength: 50
	},
	idVendor:{ type: Schema.Types.ObjectId, ref: 'Vendor' }, //idVendor
	},
	{
		timestamps: true
	})

module.exports = mongoose.model('Event', eventSchema)