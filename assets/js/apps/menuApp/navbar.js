//navbar.js
define ([
	'backbone',
	'tpl!apps/menuApp/navbar.tpl',
	'common/dispatch'
], function (
	Backbone,
	navbarTemplate,
	dispatch
) {
	var NavbarView = Backbone.View.extend({
		events: {
		
		},
		handleUserChange: function () {
			console.log("nbV registers user model change", this.user);
			this.render();
		},
		initialize: function (user) {
			console.log("navbarView initializes . . .",this);
			this.user = user;
			this.listenTo(this.user, "change", this.handleUserChange);
		
		},
		render: function () {
			this.$el.html(this.template(this.user.toJSON()));
			return this;		
		},
		template: navbarTemplate
	
	});
	
	return NavbarView;

});