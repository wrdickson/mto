//app.js
define([
    'backbone', 
    'jquery',
	'bootstrap'
], function (
	Backbone
) {
	'use strict';
    /*
    PRIVATE VARIABLES:
    */
    var app;
    /*
    APP INITIALIZATION:
    */
    app = {
		
        start:  function () {
            var self = this;
            console.log("app started . . . ");
        }
    };
	return app;
});

