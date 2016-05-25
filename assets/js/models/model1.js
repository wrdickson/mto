//model1.js
define([
	'backbone',
	'common/dispatch'

], function (
	Backbone,
	dispatch


) {
	var Model1 = Backbone.Model.extend({
		initialize: function() {
			this.on("change", function () {
				console.log("model1 changed");
			});
						
		}
	});
	
	return Model1;


});