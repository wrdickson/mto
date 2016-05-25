define([
	'backbone',
	'common/data',
	'common/dispatch',
	'tpl!templates/t2.tpl'

], function (
	Backbone,
	data,
	dispatch,
	T2
){
	var View2 = Backbone.View.extend({
		clickButton2: function () {
			this.data.set("foo", $("#ta2").val());
		},
		events: {
			'click #button2'		:	'clickButton2'
		},
		initialize: function (data) {
			this.data = data;
			this.listenTo(data, 'change', function () {
				console.log("View2 detects model change event");
				this.render();
			});
		},
		render: function () {
			if(this.data.get("foo") == 99){
				this.remove();
			};
			this.$el.html(this.template(this.data.toJSON()));
			return this;
		},
		//note how template does NOT need to be assigned at initailization . . . part of Backbone
		template: T2
	});
	
	return View2;
	
});