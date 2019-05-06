/**
 * @apiName Create Event
 * @apiGroup Vendor
 * @api {post} /v1/api/vendor/event Create Event
 * @apiHeader {String} auth Unique token.
 * @apiParam {String} name Name of the event. (Body)
 * @apiSuccess (Success 201) {Boolean} success Success status.
 * @apiSuccess (Success 201) {String} message Event successfully created.
 * @apiSuccess (Success 201) {Object[]} data Show all Event vendor, including new event.
 */
/**
 * @apiName Get Event
 * @apiGroup Vendor
 * @api {get} /v1/api/vendor/event Get Event
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Showing your event.
 * @apiSuccess {Object[]} data Only displays the same event list as the vendor's name.
 */
/**
 * @apiName Update Event
 * @apiGroup Vendor
 * @api {put} /v1/api/vendor/event/:id Update Event
 * @apiParam {String} id Event unique ID. (Params)
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Event has been updated.
 * @apiSuccess {Object[]} data Show event vendor that has just been update.
 */
/**
 * @apiName Delete Event
 * @apiGroup Vendor
 * @api {delete} /v1/api/vendor/event/:id Delete Event
 * @apiParam {String} id Event unique ID. (Params)
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Event has been deleted.
 * @apiSuccess {Object[]} data Show all Event vendor that is not deleted.
 */
/**
 * @apiName Get Booking
 * @apiGroup Vendor
 * @api {get} /v1/api/vendor/booking Get Booking
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show booking list.
 * @apiSuccess {Object[]} data Only displays the same booking list as the vendor's name.
 */
/**
 * @apiName Accept/Reject Booking
 * @apiGroup Vendor
 * @api {put} /v1/api/vendor/booking/:id Accept/Reject Booking
 * @apiHeader {String} auth Unique token.
 * @apiParam {String} id Event unique ID. (Params)
 * @apiParam {String} status Send status, can be 'Approved' or 'Rejected'. (Body)
 * @apiParam {String} confirmedDate if status 'Approved', choose Confirmation Date. (Body)
 * @apiParam {String} remarks if status 'Rejected', send remarks. (Body)
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all booking list.
 * @apiSuccess {Object[]} data Display booking list with list that has been approved/rejected.
 */

/**
 * @apiName Get Event
 * @apiGroup Company
 * @api {get} /v1/api/company/event Get Event
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all event.
 * @apiSuccess {Object[]} data Show all Event.
 */
/**
 * @apiName Create Booking
 * @apiGroup Company
 * @api {post} /v1/api/company/booking Create Booking
 * @apiHeader {String} auth Unique token.
 * @apiParam {String} id Event unique ID. (Params)
 * @apiParam {String} date Proposed date. (Body)
 * @apiParam {String} location The booking event location. (Body)
 * @apiSuccess (Success 201) {Boolean} success Success status.
 * @apiSuccess (Success 201) {String} message Event successfully created.
 * @apiSuccess (Success 201) {Object[]} data Only displays the same booking list as the company's name, including the new booking list.
 */
/**
 * @apiName Show Booking
 * @apiGroup Company
 * @api {get} /v1/api/company/booking/ Show Booking
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all event.
 * @apiSuccess {Object[]} data Only displays the same booking list as the company's name.
 */
