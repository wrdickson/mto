//menuApp.js
define([
	'common/dispatch',
	'apps/menuApp/navbar'

], function (
	dispatch,
	NavbarView

) {

	var menuApp = {
		initialize: function (user) {
			this.user = user;
			console.log("menuApp initializes . . .", this);
			//instantiate a navbar view
			this.navbarView = new NavbarView(this.user);
			//burn the navbar
			$("#navbar").html(this.navbarView.render().el);
		}
	
	};
	
	return menuApp;

});