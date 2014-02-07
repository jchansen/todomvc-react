define(
	[
		'app',

    // Routers
    './router'
	],
	function (app, Router) {

		var run = function () {
      new Router();
			app.start();
		};

		return {
			run: run
		};
	});