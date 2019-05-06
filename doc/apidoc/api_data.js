define({ "api": [
  {
    "name": "Company_Test_API",
    "group": "Company",
    "type": "get",
    "url": "/v1/api/company/test",
    "title": "Get Test API",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "WELCOME",
            "description": "<p>TO COMPANY API.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/company.js",
    "groupTitle": "Company"
  },
  {
    "name": "Accept_Reject_Booking",
    "group": "Vendor",
    "type": "put",
    "url": "/v1/api/vendor/booking/:id",
    "title": "Accept/Reject Booking",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID. (Params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Send status, can be 'Approved' or 'Rejected'. (Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmedDate",
            "description": "<p>if status 'Approved', choose Confirmation Date. (Body)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>if status 'Rejected', send remarks. (Body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The booked event has been approved/rejected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Display data that has just been approved/rejected.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  },
  {
    "name": "Create_Event",
    "group": "Vendor",
    "type": "post",
    "url": "/v1/api/vendor/event",
    "title": "Create Event",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the event. (Body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Event successfully created.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Show all Event vendor, including new event.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  },
  {
    "name": "Delete_Event",
    "group": "Vendor",
    "type": "delete",
    "url": "/v1/api/vendor/event/:id",
    "title": "Delete Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID. (Params)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Event has been deleted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Show all Event vendor that is not deleted.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  },
  {
    "name": "Get_Booking",
    "group": "Vendor",
    "type": "delete",
    "url": "/v1/api/vendor/booking",
    "title": "Get Booking",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Show booking list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Only displays the same booking list as the vendor's name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  },
  {
    "name": "Get_Event",
    "group": "Vendor",
    "type": "get",
    "url": "/v1/api/vendor/event",
    "title": "Get Event",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Showing your event.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Only displays the same event list as the vendor's name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  },
  {
    "name": "Update_Event",
    "group": "Vendor",
    "type": "put",
    "url": "/v1/api/vendor/event/:id",
    "title": "Update Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID. (Params)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Event has been updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Show event vendor that has just been update.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/API/vendor.js",
    "groupTitle": "Vendor"
  }
] });