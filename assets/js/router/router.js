//router
define ([
    'backbone',
    'common/dispatch'
], function (
    Backbone,
    dispatch
) {
    'use strict'
	
    var Router = Backbone.Router.extend({
        routes: {
			""				:	"cleanUrl",
			"index.php"		:	"cleanUrl"
        },

		cleanUrl: function () {
			//this fires if the user navigates straight to the site . . .it's the entry point
			//this.navigate("/films/" + miffCurrentYear  + "/", true);
			console.log("firing cleanUrl");
			this.navigate("/index.php" , true);
			//$("#workslateContent").html("changed");
			dispatch.trigger("loadPage", 132);
		}
    });
	

    return Router;

});