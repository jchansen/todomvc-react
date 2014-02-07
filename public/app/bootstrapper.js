define(
	[
		'app'
	],
	function (app) {

		var run = function () {
			app.start();
		};

		return {
			run: run
		};
	});