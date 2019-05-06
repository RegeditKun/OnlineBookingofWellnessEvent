const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookingSchema = new Schema({
  idCompany: { type: Schema.Types.ObjectId, ref: 'Company' }, // idCompany
  idEvent: { type: Schema.Types.ObjectId, ref: 'Event' }, // idVendor
  location: {
    type: String,
    required: true
  },
  date: [{ type: Date }],
  confirmedDate: {
    type: Date,
    default: null
  },
  responseDate: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  remarks: { type: String, default: null }
},
{
  timestamps: true
})

module.exports = mongoose.model('Booking', bookingSchema)
