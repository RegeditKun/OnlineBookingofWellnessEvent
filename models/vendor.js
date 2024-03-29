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
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Vendor', vendorSchema)
