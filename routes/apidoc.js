/**
 * @apiName Login
 * @apiGroup Login
 * @api {post} /v1/api/vendor/event Login
 * @apiParam {String} email email account. (Body)
 * @apiParam {String} password password account. (body)
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Vendor or Company Found.
 * @apiSuccess {String} token token for authorization.
 * @apiSuccessExample {json} Success-Response for Vendor:
 * {
 *  "success": true,
 *  "message": "Vendor found!",
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDBhZTcyNDkzZGE4MmI0YWU1Nzg2ZCIsIm5hbWUiOiJIYXZhbmEgTWVkaWNhIiwicm9sZSI6InZlbmRvciIsImlhdCI6MTU1NzIwNDI4MSwiZXhwIjoxNTU3ODA5MDgxfQ.fio_KwORMHPYWqMlIX8x8OxWwo71CBzMNbmf7SDIHK0"
 * }
 * @apiSuccessExample {json} Success-Response for Company:
 * {
 *  "success": true,
 *  "message": "Company found!",
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDBhZTBmNDkzZGE4MmI0YWU1Nzg2YiIsIm5hbWUiOiJHbGludHMgQWNhZGVteSIsInJvbGUiOiJjb21wYW55IiwiaWF0IjoxNTU3MjA2Mzg5LCJleHAiOjE1NTc4MTExODl9.wt1QyDZmuL2p0M52FmUZUn8Alqm3it5N3TPgcZCfVWk"
 * }
 */
/**
 * @apiName Create Event
 * @apiGroup Vendor
 * @api {post} /v1/api/vendor/event Create Event
 * @apiHeader {String} auth Unique token.
 * @apiParam {String} name Name of the event. (Body)
 * @apiSuccess (Success 201) {Boolean} success Success status.
 * @apiSuccess (Success 201) {String} message Event successfully created.
 * @apiSuccess (Success 201) {Object[]} data Only displays the same booking list as the vendor's name, including new event.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Event successfully created",
 *  "data": [
 *      {
 *          "_id": "5cd0af21493da82b4ae5786e",
 *          "name": "Medical Check-Up",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      },
 *      {
 *          "_id": "5cd10f639b1207128b094af6",
 *          "name": "Sample",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      }
 *  ]
 * }
 */
/**
 * @apiName Get Event
 * @apiGroup Vendor
 * @api {get} /v1/api/vendor/event Get Event
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Showing your event.
 * @apiSuccess {Object[]} data Only displays the same event list as the vendor's name.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Show your event",
 *  "data": [
 *      {
 *          "_id": "5cd0af21493da82b4ae5786e",
 *          "name": "Medical Check-Up",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      },
 *      {
 *          "_id": "5cd10f639b1207128b094af6",
 *          "name": "Sample",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      }
 *  ]
 * }
 */
/**
 * @apiName Update Event
 * @apiGroup Vendor
 * @api {put} /v1/api/vendor/event/:id Update Event
 * @apiParam {String} id Event unique ID. (Params)
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Event has been updated.
 * @apiSuccess {Object[]} data Only displays the same event list as the vendor's name, including event that has been updated.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Event has been updated",
 *  "data": [
 *      {
 *          "_id": "5cd0af21493da82b4ae5786e",
 *          "name": "Medical Check-Up",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      },
 *      {
 *          "_id": "5cd10f639b1207128b094af6",
 *          "name": "sample update",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      }
 *  ]
 * }
 */
/**
 * @apiName Delete Event
 * @apiGroup Vendor
 * @api {delete} /v1/api/vendor/event/:id Delete Event
 * @apiParam {String} id Event unique ID. (Params)
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Event has been deleted.
 * @apiSuccess {Object[]} data Only displays the same event list as the vendor's name, Deleted event will not display.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Event has been deleted",
 *  "data": [
 *      {
 *          "_id": "5cd0af21493da82b4ae5786e",
 *          "name": "Medical Check-Up",
 *          "idVendor": {
 *              "_id": "5cd0ae72493da82b4ae5786d",
 *              "name": "Havana Medica"
 *          }
 *      }
 *  ]
 *}
 */
/**
 * @apiName Get Booking
 * @apiGroup Vendor
 * @api {get} /v1/api/vendor/booking Get Booking
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show booking list.
 * @apiSuccess {Object[]} data Only displays the same booking list as the vendor's name.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Showing booking list",
 *  "data": [
 *      {
 *          "date": [
 *              "2019-07-04T00:00:00.000Z",
 *              "2019-07-05T00:00:00.000Z",
 *              "2019-07-06T00:00:00.000Z"
 *          ],
 *          "confirmedDate": null,
 *          "responseDate": null,
 *          "status": "Pending",
 *          "remarks": null,
 *          "_id": "5cd1173c6b9f1c19af248bc9",
 *          "idCompany": {
 *              "_id": "5cd0ae0f493da82b4ae5786b",
 *              "name": "Glints Academy"
 *          },
 *          "idEvent": {
 *              "_id": "5cd10f639b1207128b094af6",
 *              "name": "sample",
 *              "idVendor": {
 *                  "_id": "5cd0ae72493da82b4ae5786d",
 *                  "name": "Havana Medica"
 *              }
 *          },
 *          "location": "Jakarta",
 *          "createdAt": "2019-05-07T05:27:24.144Z"
 *      }
 *  ]
 *}
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
 * @apiSuccessExample {json} Success-Response for Approved Booking List:
 * {
 *  "success": true,
 *  "message": "Approve is success",
 *  "data": [
 *      {
 *          "date": [
 *              "2019-07-04T00:00:00.000Z",
 *              "2019-07-05T00:00:00.000Z",
 *              "2019-07-06T00:00:00.000Z"
 *          ],
 *          "confirmedDate": "2019-07-05T11:00:00.000Z",
 *          "responseDate": "2019-05-06T22:21:06.953Z",
 *          "status": "Approved",
 *          "remarks": null,
 *          "_id": "5cd1173c6b9f1c19af248bc9",
 *          "idCompany": {
 *              "_id": "5cd0ae0f493da82b4ae5786b",
 *              "name": "Glints Academy"
 *          },
 *          "idEvent": {
 *              "_id": "5cd10f639b1207128b094af6",
 *              "name": "sample",
 *              "idVendor": {
 *                  "_id": "5cd0ae72493da82b4ae5786d",
 *                  "name": "Havana Medica"
 *              }
 *          },
 *          "location": "Jakarta",
 *          "createdAt": "2019-05-07T05:27:24.144Z"
 *      }
 *  ]
 *}
 @apiSuccessExample {json} Success-Response for Rejected Booking List:
 * {
 *  "success": true,
 *  "message": "Reject is success",
 *  "data": [
 *      {
 *          "date": [
 *              "2019-07-04T00:00:00.000Z",
 *              "2019-07-05T00:00:00.000Z",
 *              "2019-07-06T00:00:00.000Z"
 *          ],
 *          "confirmedDate": null,
 *          "responseDate": "2019-05-06T22:21:06.953Z",
 *          "status": "Rejected",
 *          "remarks": "The location is too far",
 *          "_id": "5cd1173c6b9f1c19af248bc9",
 *          "idCompany": {
 *              "_id": "5cd0ae0f493da82b4ae5786b",
 *              "name": "Glints Academy"
 *          },
 *          "idEvent": {
 *              "_id": "5cd10f639b1207128b094af6",
 *              "name": "sample",
 *              "idVendor": {
 *                  "_id": "5cd0ae72493da82b4ae5786d",
 *                  "name": "Havana Medica"
 *              }
 *          },
 *          "location": "Jakarta",
 *          "createdAt": "2019-05-07T05:27:24.144Z"
 *      }
 *  ]
 *}
 */

/**
 * @apiName Get Event
 * @apiGroup Company
 * @api {get} /v1/api/company/event Get Event
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all event.
 * @apiSuccess {Object[]} data Show all Event.
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": "Show all event",
 *   "data": [
 *       {
 *           "name": "Medical Check-Up",
 *           "vendors": [
 *               {
 *                   "idEvent": "5cd0af21493da82b4ae5786e",
 *                   "idVendor": {
 *                       "_id": "5cd0ae72493da82b4ae5786d",
 *                       "name": "Havana Medica"
 *                   }
 *               },
 *               {
 *                   "idEvent": "5cd0af45493da82b4ae57870",
 *                   "idVendor": {
 *                       "_id": "5cd0ae62493da82b4ae5786c",
 *                       "name": "Heroic Health"
 *                   }
 *               }
 *           ]
 *       },
 *       {
 *           "name": "sample",
 *           "vendors": [
 *               {
 *                   "idEvent": "5cd10f639b1207128b094af6",
 *                   "idVendor": {
 *                       "_id": "5cd0ae72493da82b4ae5786d",
 *                       "name": "Havana Medica"
 *                   }
 *               }
 *           ]
 *       }
 *   ]
 * }
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
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Booking successfully created",
 *  "data": [
 *      {
 *          "date": [
 *              "2019-07-04T00:00:00.000Z",
 *              "2019-07-05T00:00:00.000Z",
 *              "2019-07-06T00:00:00.000Z"
 *          ],
 *          "confirmedDate": null,
 *          "responseDate": null,
 *          "status": "Pending",
 *          "remarks": null,
 *          "_id": "5cd1173c6b9f1c19af248bc9",
 *          "idCompany": "5cd0ae0f493da82b4ae5786b",
 *          "idEvent": {
 *              "_id": "5cd10f639b1207128b094af6",
 *              "name": "sample",
 *              "idVendor": {
 *                  "_id": "5cd0ae72493da82b4ae5786d",
 *                  "name": "Havana Medica"
 *              }
 *          },
 *          "location": "Jakarta"
 *      }
 *  ]
 *}
 */
/**
 * @apiName Show Booking
 * @apiGroup Company
 * @api {get} /v1/api/company/booking/ Show Booking
 * @apiHeader {String} auth Unique token.
 * @apiSuccess {Boolean} success Success status.
 * @apiSuccess {String} message Show all event.
 * @apiSuccess {Object[]} data Only displays the same booking list as the company's name.
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "success": true,
 *  "message": "Show booking list",
 *  "data": [
 *      {
 *          "date": [
 *              "2019-07-04T00:00:00.000Z",
 *              "2019-07-05T00:00:00.000Z",
 *              "2019-07-06T00:00:00.000Z"
 *          ],
 *          "confirmedDate": null,
 *          "responseDate": null,
 *          "status": "Pending",
 *          "remarks": null,
 *          "_id": "5cd1173c6b9f1c19af248bc9",
 *          "idCompany": "5cd0ae0f493da82b4ae5786b",
 *          "idEvent": {
 *              "_id": "5cd10f639b1207128b094af6",
 *              "name": "sample sample",
 *              "idVendor": {
 *                  "_id": "5cd0ae72493da82b4ae5786d",
 *                  "name": "Havana Medica"
 *              }
 *          },
 *          "location": "Jakarta"
 *      }
 *  ]
 *}
 */
