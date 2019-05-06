const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// Cors
app.use(cors())

// Body-Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
const localDB = 'mongodb://127.0.0.1:27017/onlineBooking'
const mongoDB = process.env.MONGO_STRINGCON || localDB
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Routes
const index = require('./routes/index')
app.use('/v1', index)

// Port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
