const express = require('express')
const router = express.Router()
const companyControllers = require('../../controllers/company')
const auth = require('../../middleware/auth')

/**
 * @apiName Company Test API
 * @apiGroup Company
 * @api {get} /v1/api/company/test Get Test API
 * @apiHeader {String} auth Unique token
 *
 * @apiSuccess {json} WELCOME TO COMPANY API.
 */

router.post('/registration', companyControllers.registration)

router.get('/event', auth.authCompany, companyControllers.showEvent)

router.post('/booking', auth.authCompany, companyControllers.createBooking)

router.get('/booking', auth.authCompany, companyControllers.showBooking)

/**
 * @apiName Get Event
 * @apiGroup Vendor
 * @api {get} /v1/api/company/event Get Event
 * @apiHeader {String} auth Unique token.)
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all event.
 * @apiSuccess {Object[]} data Show all Event.
 */
/**
 * @apiName Create Booking
 * @apiGroup Vendor
 * @api {get} /v1/api/company/booking/:id Get Event
 * @apiHeader {String} auth Unique token.)
 * @apiSuccess (Success 201) {Boolean} success Success status.
 * @apiSuccess (Success 201) {String} message Show all event.
 * @apiSuccess (Success 201) {Object[]} data Show all Event.
 */

module.exports = router
