define(
	[
    'backbone'
	],
	function (Backbone) {

		var app = {
      start: function(){
        Backbone.history.start({pushState: true});
      }
    }

		return app;

	});