define(
  [
    'react',
    'text!layouts/index.html',
    'cheerio',
    'underscore'
  ],
  function (React, layoutHtml, cheerio, _) {
    var exports = {};

    var showComponent = function (req, res) {
      React.renderComponentToString(
        this.Component(),
        function (html) {
          var $ = cheerio.load(layoutHtml);
          $('#appRegion').html(html)
          res.send("<!DOCTYPE html>" + $.html());
        }
      );
    };

    exports.registerRoutes = function (app, routes) {
      var index;
      for (index = 0; index < routes.length; ++index) {
        var route = routes[index][0];
        var context = {
          Component: routes[index][1]
        }
        app.get(route, function(){
          showComponent.apply(context, arguments);
        });
      }
    }

    return exports;
  }
);