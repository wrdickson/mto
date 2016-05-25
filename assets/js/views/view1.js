define([
	'backbone',
	'common/data',
	'common/dispatch',
	'tpl!templates/t1.tpl'

], function (
	Backbone,
	data,
	dispatch,
	T1
){
	var View1 = Backbone.View.extend({
		addMenuItem: function () {
			console.log("firing addMenuItem");
			$("#miffNavbar").append('<li id="m"><a id = "m" href="">Added Menu Item</a></li>');
			//we have to make sure to preventDefault() on the new DOM item . . . 
			$("#mtoNav  a").on("click", function(e) {
				//this sniffs for a 'submenu' attribute set to 'true' and prevents collapse in that case
				if (($(e.target).attr("subMenu")) != 'true'){
					$(".collapse").collapse('hide');
				};
				//prevent page load
				e.preventDefault();
			});			
		},
		changeUsername: function () {
			dispatch.trigger("app:changeUsername", $("#txtNewUsername").val());
		},
		clickButton1: function () {
			this.data.set("foo", $("#ta1").val());
		},
		events: {
			'click #button1'			:	'clickButton1',
			'click #btnAddMenuItem'		:	'addMenuItem',
			'click #btnChangeUsername'	:	'changeUsername'
		},
		initialize: function (data) {
			this.data = data;
			this.listenTo(data, 'change', function () {
				console.log("View1 detects model change event");
				this.render();
			});
		},
		render: function () {
			this.$el.html(this.template(this.data.toJSON()));
			return this;
		},
		//note how template does NOT need to be assigned at initailization . . . part of Backbone
		template: T1
	});
	
	return View1;
	
});