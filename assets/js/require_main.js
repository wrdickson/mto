//require_main.js
requirejs.config({
  //var mtoBaseUrl was passed in via PHP in index.php
  waitSeconds: 200,
  baseUrl: "http://localhost/mto/assets/js/",
  paths: {
    backbone: "vendor/node_modules/backbone/backbone",
    jquery: "vendor/node_modules/jquery/dist/jquery",
	json2: "vendor/json2",
	text: "vendor/text",
    tpl: "vendor/underscore-tpl",
    underscore: "vendor/node_modules/backbone/node_modules/underscore/underscore",
    bootstrap: "vendor/node_modules/bootstrap/dist/js/bootstrap",
	tinymce: "vendor/tinymce/tinymce.min"
  },
  shim: {
    bootstrap: {
        deps: ["jquery"]
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore","json2"],
      exports: "Backbone"
    },
    tpl: {
        deps: ["text"]
    },
	datatables: {
		deps: ["jquery"]
	},
	tinymce: {
		deps: ["jquery"],
		exports: "tinymce"
	}
  }
});
require(["app"], function(app){
  app.start();
});
