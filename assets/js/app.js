//app.js
define([
	'views/view1',
	'views/view2',
	'models/model1',
	'apps/menuApp/menuApp',
	'common/dispatch',
	'router/router',
    'backbone',
	'tinymce',
    'jquery',
	'bootstrap'
	
], function (
	View1,
	View2,
	Model1,
	menuApp,
	dispatch,
	Router,
	Backbone,
	tinymce
) {
	'use strict';
    /*
    PRIVATE VARIABLES:
    */
    var app;
	var root = "mto";
	var user;
    /*
    APP INITIALIZATION:
    */
    app = {
    	loadPage: function(id){
			var viewData = {
				"foo" : 1,
				"bar" : 2
			};
			
			//note: setting data at instantiation does NOT trigger change
			var data1 = new Model1(viewData);
			console.log("data1 @ init: ", data1);
			var view1 = new View1(data1);
			$("#v1").html(view1.render().el);
			
			var view2 = new View2(data1);
			$("#v2").html(view2.render().el);
			
			
			
			var PageView = Backbone.View.extend({
				events: {
				
				},
				getTinymceContent: function (editor) {
					console.log(editor.getContent());				
				},
				initialize: function (data) {
					this.data = data;
					this.listenTo(data, 'change', function () {
						console.log("PageView detects model change event");
						
					});					
				},
				initializeTinymce: function () {
					var self = this;
					tinymce.init({
						skin: "lightgray",
						selector: 'textarea',
						plugins: [
							'advlist autolink lists link image charmap print preview anchor',
							'searchreplace visualblocks code fullscreen',
							'insertdatetime media table contextmenu paste code'
						  ],
						plugin_preview_width: 300,
						menubar: 'file edit insert format tools',
						toolbar: ['mybutton | insert file undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link '],
						setup: function (editor) {
							editor.addButton('mybutton', {
							  text: 'Log content',
							  icon: false,
							  onclick: function () {
								self.getTinymceContent(editor);
							  }
							});				
						}
						
					});
					
				},
				render: function () {
					this.$el.html("<textarea id='t1'></textarea>");
					pageView.initializeTinymce();
					return this;
				}			
			});
			var pageView = new PageView(data1);
			$("#sidebar1").html(pageView.render().el);
			pageView.initializeTinymce();
		
			
			
    	},
		
        start:  function () {
            var self = this;
            console.log("mto app started . . . ");
            var router = new Router();
            //initialize history AFTER instantion of router(s)
            Backbone.history.start({
                pushState: true,
                root: root
            });
			
			//create a dummy user to initialize apps
			var User = Backbone.Model.extend({});
			user = new User(
				{
				username: "myUser",
				userId: "1234",
				permission: "10",
				token: "asdfasdf"
				}
			);
			menuApp.initialize(user);
			
			dispatch.on("app:changeUsername", function (newName) {
				console.log("app:changeUsername triggers . . . ",newName);
				console.log("user", user);
				user.set("username", newName);
			});	
			
			//stop a links in nav bar from reloading page IF they don't have my
			//	hacked-in 'subMenu' attribute
			$("#mtoNav  a").on("click", function(e) {
				//this sniffs for a 'submenu' attribute set to 'true' and prevents collapse in that case
				if (($(e.target).attr("subMenu")) != 'true'){
					$(".collapse").collapse('hide');
				};
				//prevent page load
				e.preventDefault();
			});			
        }
    };
	

    
    dispatch.on("loadPage", function(id){
		app.loadPage(id)});
	
	dispatch.on("model1:change", function (dat) {
		console.log("dat changed", dat);
	});
		
	return app;
});

