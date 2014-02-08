define(
	[
		'app',

    // Routers
    './client_router',
    './routes'
	],
	function (app, Router, routes) {

		var run = function () {
      new Router({routes: routes});
			app.start();
		};

		return {
			run: run
		};
	});