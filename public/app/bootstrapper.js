define(
	[
		'app',

    // Routers
    './client_router'
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