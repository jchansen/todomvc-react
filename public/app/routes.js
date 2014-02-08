define(
  [
    './components/HomePage'
  ],
  function (HomePage) {

    var routes = [];

    routes.push(["/", HomePage]);

    return routes;

  });